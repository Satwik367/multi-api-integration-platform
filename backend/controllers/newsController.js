const axios = require("axios");

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
                    pageSize: 10
                }
            }
        );

        res.json({
            success: true,
            articles: response.data.articles
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getNews
};