const express = require("express");

const {

    chat

} = require("../controllers/geminiController");

const router = express.Router();

router.post("/", chat);

module.exports = router;