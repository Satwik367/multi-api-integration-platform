const express = require("express");

const {

    getGithubUser

} = require("../controllers/githubController");

const router = express.Router();

router.get("/", getGithubUser);

module.exports = router;