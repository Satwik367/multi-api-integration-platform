const Workflow = require("../models/Workflow");

const createWorkflow = async (req, res) => {

    try {

        const {

            name,

            description,

            steps

        } = req.body;

        const workflow = await Workflow.create({

            name,

            description,

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

    try {

        const workflows = await Workflow.find({

            user: req.user._id

        });

        res.json({

            success: true,

            workflows

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

const deleteWorkflow = async (req, res) => {

    try {

        const workflow = await Workflow.findOne({

            _id: req.params.id,

            user: req.user._id

        });

        if (!workflow) {

            return res.status(404).json({

                success: false,

                message: "Workflow not found"

            });

        }

        await Workflow.findByIdAndDelete(req.params.id);

        res.json({

            success: true,

            message: "Workflow deleted successfully"

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

    createWorkflow,

    getWorkflows,

    deleteWorkflow

};