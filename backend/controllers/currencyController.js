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

        // Free third-party APIs occasionally have transient network hiccups
        // between cloud hosts. Give it a fast, bounded timeout, and retry
        // once before treating it as a real failure.
        const fetchRates = async () => {

            return axios.get(

                `https://open.er-api.com/v6/latest/${from.toUpperCase()}`,

                { timeout: 8000 }

            );

        };

        let response;

        try {

            response = await fetchRates();

        } catch (firstErr) {

            const isTransient =
                firstErr.code === "ETIMEDOUT" ||
                firstErr.code === "ECONNABORTED" ||
                firstErr.code === "ECONNRESET";

            if (!isTransient) {
                throw firstErr;
            }

            response = await fetchRates();

        }

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

        const errorMessage =
            err.message ||
            err.response?.data?.["error-type"] ||
            err.response?.data?.message ||
            err.code ||
            "Unknown error occurred while converting currency";

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