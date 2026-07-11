const mongoose = require("mongoose");

const apiLogSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    api: {

        type: String,

        required: true

    },

    status: {

        type: String,

        enum: [

            "SUCCESS",

            "FAILED"

        ],

        default: "SUCCESS"

    },

    request: {

        type: Object,

        default: {}

    },

    response: {

        type: Object,

        default: {}

    }

}, {

    timestamps: true

});

module.exports = mongoose.model(

    "ApiLog",

    apiLogSchema

);