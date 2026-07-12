const { GoogleGenAI } = require("@google/genai");
const createApiLog = require("../utils/createApiLog");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const chat = async (req, res) => {

    let prompt = "";

    try {

        prompt = req.body.prompt;

        const response = await ai.models.generateContent({

            // Updated model
            model: "gemini-2.5-flash-lite",

            contents: prompt

        });

        await createApiLog(

            req,

            "Gemini API",

            "SUCCESS",

            { prompt },

            { response: response.text }

        );

        res.json({

            success: true,

            response: response.text

        });

    }

    catch (err) {

        await createApiLog(

            req,

            "Gemini API",

            "FAILED",

            { prompt },

            { error: err.message }

        );

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    chat

};