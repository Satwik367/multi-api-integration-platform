const Workflow = require("../models/Workflow");
const axios = require("axios");
const { GoogleGenAI } = require("@google/genai");
const createApiLog = require("../utils/createApiLog");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

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

                        break;

                    }

                case "GitHub":

                    {

                        const username = step.config?.username || "torvalds";

                        const githubResponse = await axios.get(

                            `https://api.github.com/users/${username}`

                        );

                        currentOutput = JSON.stringify(

                            githubResponse.data,

                            null,

                            2

                        );

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

                        break;

                    }

                case "Gemini":

                    {

                        const geminiResponse = await ai.models.generateContent({

                            model: "gemini-flash-latest",

                            contents: `Analyze the following API output:\n\n${currentOutput}`

                        });

                        currentOutput = geminiResponse.text;

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