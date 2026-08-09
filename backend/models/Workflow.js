const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    steps: [

        {
            api: {
                type: String,
                required: true
            },
            config: {
                type: Object,
                default: {}
            }
        }

    ]

}, {

    timestamps: true

});

module.exports = mongoose.model(
    "Workflow",
    workflowSchema
);