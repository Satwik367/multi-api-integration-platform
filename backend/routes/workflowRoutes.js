const express = require("express");

const router = express.Router();

const {
    createWorkflow,
    getWorkflows,
    deleteWorkflow
} = require("../controllers/workflowController");

const {
    runWorkflow
} = require("../controllers/workflowExecutionController");

const {
    protect
} = require("../middleware/authMiddleware");

// All workflow routes require authentication
router.use(protect);

// Get all workflows of logged in user
router.get("/", getWorkflows);

// Create new workflow
router.post("/", createWorkflow);

// Execute workflow
router.post("/:id/run", runWorkflow);

// Delete workflow
router.delete("/:id", deleteWorkflow);

module.exports = router;