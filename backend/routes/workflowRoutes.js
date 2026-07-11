const express = require("express");

const {

    createWorkflow,

    getWorkflows

} = require("../controllers/workflowController");

const {

    protect

} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createWorkflow);

router.get("/", protect, getWorkflows);

module.exports = router;