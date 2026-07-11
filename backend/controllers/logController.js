const ApiLog = require("../models/ApiLog");

const getLogs = async (req, res) => {

    try {

        const logs = await ApiLog.find({

            user: req.user._id

        }).sort({

            createdAt: -1

        });

        res.json({

            success: true,

            logs

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    getLogs

};