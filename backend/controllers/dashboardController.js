const ApiLog = require("../models/ApiLog");
const Workflow = require("../models/Workflow");

const getDashboard = async (req, res) => {

    try {

        const totalCalls = await ApiLog.countDocuments({

            user: req.user._id

        });

        const successfulCalls = await ApiLog.countDocuments({

            user: req.user._id,

            status: "SUCCESS"

        });

        const failedCalls = await ApiLog.countDocuments({

            user: req.user._id,

            status: "FAILED"

        });

        const workflows = await Workflow.countDocuments({

            user: req.user._id

        });

        const recentActivity = await ApiLog.find({

            user: req.user._id

        })

        .sort({

            createdAt: -1

        })

        .limit(5);

        res.json({

            success: true,

            analytics: {

                totalCalls,

                successfulCalls,

                failedCalls,

                workflows,

                recentActivity

            }

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

}

module.exports={

    getDashboard

}