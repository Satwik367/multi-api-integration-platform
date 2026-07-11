const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    steps: [

        {
            type: String
        }

    ]

}, {

    timestamps: true

});

module.exports = mongoose.model(
    "Workflow",
    workflowSchema
);