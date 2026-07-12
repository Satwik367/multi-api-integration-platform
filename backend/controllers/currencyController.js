const axios = require("axios");

const createApiLog = require("../utils/createApiLog");

const convertCurrency = async (req, res) => {

    try {

        const { from, to, amount } = req.query;

        const response = await axios.get(

            `https://open.er-api.com/v6/latest/${from.toUpperCase()}`

        );

        const rate = response.data.rates[to.toUpperCase()];

        const conversion = {

            from,

            to,

            amount,

            exchangeRate: rate,

            convertedAmount: Number(amount) * rate

        };

        await createApiLog(

            req,

            "Currency API",

            "SUCCESS",

            req.query,

            conversion

        );

        res.json({

            success: true,

            conversion

        });

    }

    catch (err) {

        await createApiLog(

            req,

            "Currency API",

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

    convertCurrency

};