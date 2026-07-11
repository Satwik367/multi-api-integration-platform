const axios = require("axios");

const convertCurrency = async (req, res) => {

    try {

        const { from, to, amount } = req.query;

        if (!from || !to || !amount) {

            return res.status(400).json({
                success: false,
                message: "from, to and amount are required"
            });

        }

        const response = await axios.get(
            `https://open.er-api.com/v6/latest/${from.toUpperCase()}`
        );

        const rate = response.data.rates[to.toUpperCase()];

        if (!rate) {
            return res.status(400).json({
                success: false,
                message: "Invalid currency code"
            });
        }

        const converted = Number(amount) * rate;

        res.json({
            success: true,
            conversion: {
                from: from.toUpperCase(),
                to: to.toUpperCase(),
                amount: Number(amount),
                exchangeRate: rate,
                convertedAmount: converted
            }
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    convertCurrency
};