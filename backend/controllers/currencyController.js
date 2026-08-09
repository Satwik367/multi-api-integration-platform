const axios = require("axios");

const createApiLog = require("../utils/createApiLog");

const convertCurrency = async (req, res) => {

    const { from, to, amount } = req.query;

    try {

        if (!from || !to || !amount) {

            throw new Error(
                "Missing required query params: 'from', 'to' and 'amount' are all required"
            );

        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {

            throw new Error(
                `Invalid amount: "${amount}" is not a positive number`
            );

        }

        const response = await axios.get(

            `https://open.er-api.com/v6/latest/${from.toUpperCase()}`

        );

        if (response.data.result === "error") {

            throw new Error(
                `Exchange rate provider error: ${response.data["error-type"] || "unknown"}`
            );

        }

        const rate = response.data.rates?.[to.toUpperCase()];

        if (!rate) {

            throw new Error(
                `Unsupported currency code: "${to.toUpperCase()}" was not found in the exchange rate data`
            );

        }

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

        // Prefer the most specific message available: our own thrown
        // errors, then whatever the upstream API returned, then axios's
        // own message. Never fall back to an empty string, or the log
        // becomes undiagnosable.
        const errorMessage =
            err.message ||
            err.response?.data?.["error-type"] ||
            err.response?.data?.message ||
            err.code ||
            "Unknown error occurred while converting currency";

        // Forward the upstream API's status if it gave one, use 502 for
        // network-level failures (upstream unreachable/timed out), and
        // 400 for our own input-validation errors.
        const statusCode = err.response?.status || (err.code ? 502 : 400);

        await createApiLog(

            req,

            "Currency API",

            "FAILED",

            req.query,

            { error: errorMessage }

        );

        res.status(statusCode).json({

            success: false,

            message: errorMessage

        });

    }

};

module.exports = {

    convertCurrency

};