const ApiLog = require("../models/ApiLog");

const createApiLog = async (
    req,
    api,
    status,
    request,
    response
) => {

    try {

        if (!req.user) return;

        await ApiLog.create({

            user: req.user._id,

            api,

            status,

            request,

            response

        });

    }

    catch (err) {

        console.log("ApiLog Error:", err.message);

    }

};

module.exports = createApiLog;