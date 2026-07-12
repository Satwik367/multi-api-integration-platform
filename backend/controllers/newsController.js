const axios = require("axios");

const createApiLog = require("../utils/createApiLog");

const getNews = async (req, res) => {

    try {

        const { query } = req.query;

        if (!query) {

            return res.status(400).json({

                success: false,

                message: "Query is required"

            });

        }

        const response = await axios.get(

            "https://newsapi.org/v2/everything",

            {

                params: {

                    q: query,

                    apiKey: process.env.NEWS_API_KEY,

                    pageSize: 10,

                    language: "en",

                    sortBy: "publishedAt"

                }

            }

        );

        await createApiLog(

            req,

            "News API",

            "SUCCESS",

            { query },

            response.data

        );

        res.json({

            success: true,

            articles: response.data.articles

        });

    }

    catch (err) {

        await createApiLog(

            req,

            "News API",

            "FAILED",

            req.query,

            { error: err.message }

        );

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    getNews

};