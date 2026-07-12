const express = require("express");

const router = express.Router();

const {

    getGithubUser

} = require("../controllers/githubController");

const {

    protect

} = require("../middleware/authMiddleware");

router.get("/", protect, getGithubUser);

module.exports = router;