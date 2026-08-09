const Workflow = require("../models/Workflow");
const axios = require("axios");
const { GoogleGenAI } = require("@google/genai");
const createApiLog = require("../utils/createApiLog");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// Builds a prompt for the Gemini step that matches whatever API ran
// immediately before it, so the response is a plain-language summary
// aimed at the end user — not a technical review of the JSON shape.
const buildGeminiPrompt = (lastApi, currentOutput) => {

    const instructions = {

        Weather:
            "You are summarizing live weather data for someone who just wants " +
            "to know what it's like outside. Write a short, natural, friendly " +
            "2-4 sentence summary (temperature, how it feels, general " +
            "conditions). Do not describe the JSON structure, field names, or " +
            "suggest API design improvements.",

        GitHub:
            "You are summarizing a GitHub user's public profile for someone " +
            "curious about them. Write a short, natural 2-4 sentence summary " +
            "highlighting who they are and notable stats (followers, public " +
            "repos, bio, company). Do not describe the JSON structure or " +
            "field names.",

        News:
            "You are summarizing a list of news articles for someone who " +
            "wants the highlights, not a data dump. Write a short digest " +
            "(3-5 bullet points or sentences) covering the most relevant " +
            "headlines and what they're about. Do not describe the JSON " +
            "structure or field names.",

        Gemini:
            "Continue the conversation naturally based on the previous " +
            "response below."

    };

    const instruction = instructions[lastApi] ||
        "You are a helpful assistant. Respond naturally and clearly.";

    if (!currentOutput) {
        return "Introduce yourself briefly and explain you're ready to help.";
    }

    return `${instruction}\n\nRaw data:\n${currentOutput}`;
};

const runWorkflow = async (req, res) => {

    try {

        const workflow = await Workflow.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!workflow) {

            return res.status(404).json({
                success: false,
                message: "Workflow not found"
            });

        }

        let currentOutput = "";

        let lastApi = null;

        for (const step of workflow.steps) {

            switch (step.api) {

                case "Weather":

                    {

                        const city = step.config?.city || "Kolkata";

                        const weatherResponse = await axios.get(

                            "https://api.openweathermap.org/data/2.5/weather",

                            {

                                params: {

                                    q: city,

                                    appid: process.env.WEATHER_API_KEY,

                                    units: "metric"

                                }

                            }

                        );

                        currentOutput = JSON.stringify(

                            {

                                city: weatherResponse.data.name,

                                temperature: weatherResponse.data.main.temp,

                                humidity: weatherResponse.data.main.humidity,

                                description: weatherResponse.data.weather[0].description

                            },

                            null,

                            2

                        );

                        lastApi = "Weather";

                        break;

                    }

                case "GitHub":

                    {

                        const username = step.config?.username || "torvalds";

                        const githubResponse = await axios.get(

                            `https://api.github.com/users/${username}`,

                            {

                                headers: process.env.GITHUB_TOKEN
                                    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
                                    : {}

                            }

                        );

                        currentOutput = JSON.stringify(

                            githubResponse.data,

                            null,

                            2

                        );

                        lastApi = "GitHub";

                        break;

                    }

                case "News":

                    {

                        const query = step.config?.query || "technology";

                        const newsResponse = await axios.get(

                            "https://newsapi.org/v2/everything",

                            {

                                params: {

                                    q: query,

                                    apiKey: process.env.NEWS_API_KEY,

                                    pageSize: 5

                                }

                            }

                        );

                        currentOutput = JSON.stringify(

                            newsResponse.data.articles,

                            null,

                            2

                        );

                        lastApi = "News";

                        break;

                    }

                case "Gemini":

                    {

                        const geminiResponse = await ai.models.generateContent({

                            model: "gemini-flash-latest",

                            contents: buildGeminiPrompt(lastApi, currentOutput)

                        });

                        currentOutput = geminiResponse.text;

                        lastApi = "Gemini";

                        break;

                    }

                default:

                    break;

            }

        }

        await createApiLog(

            req,

            "Workflow",

            "SUCCESS",

            {

                workflow: workflow.name

            },

            {

                output: currentOutput

            }

        );

        res.json({

            success: true,

            workflow: workflow.name,

            output: currentOutput

        });

    }

    catch (err) {

        await createApiLog(

            req,

            "Workflow",

            "FAILED",

            {

                workflowId: req.params.id

            },

            {

                error: err.message

            }

        );

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    runWorkflow

};