const express = require("express");

const router = express.Router();

const {

    chat

} = require("../controllers/geminiController");

const {

    protect

} = require("../middleware/authMiddleware");

router.post("/", protect, chat);

module.exports = router;