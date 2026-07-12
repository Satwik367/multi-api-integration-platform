const User = require("../models/User");

const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id).select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        res.json({

            success: true,

            user

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

    getProfile

};