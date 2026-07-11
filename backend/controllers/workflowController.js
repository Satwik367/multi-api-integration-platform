const Workflow = require("../models/Workflow");

const createWorkflow = async (req, res) => {

    try {

        const {

            name,

            steps

        } = req.body;

        const workflow = await Workflow.create({

            name,

            steps,

            user: req.user._id

        });

        res.status(201).json({

            success: true,

            workflow

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

const getWorkflows = async (req, res) => {

    const workflows = await Workflow.find({

        user: req.user._id

    });

    res.json({

        success: true,

        workflows

    });

};

module.exports = {

    createWorkflow,

    getWorkflows

};