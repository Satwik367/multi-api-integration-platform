const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const chat = async (req, res) => {

    try {

        const { prompt } = req.body;

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash",

            contents: prompt

        });

        res.json({

            success: true,

            response: response.text

        });

    }

    catch (err) {

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