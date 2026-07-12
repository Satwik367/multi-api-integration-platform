const axios = require("axios");

const createApiLog = require("../utils/createApiLog");

const getGithubUser = async (req, res) => {

    try {

        const { username } = req.query;

        if (!username) {

            return res.status(400).json({

                success: false,

                message: "Username is required"

            });

        }

        const response = await axios.get(

            `https://api.github.com/users/${username}`

        );

        const github = {

            name: response.data.name,

            username: response.data.login,

            avatar: response.data.avatar_url,

            followers: response.data.followers,

            following: response.data.following,

            repositories: response.data.public_repos,

            profile: response.data.html_url,

            bio: response.data.bio,

            company: response.data.company,

            location: response.data.location

        };

        await createApiLog(

            req,

            "GitHub API",

            "SUCCESS",

            {

                username

            },

            github

        );

        res.json({

            success: true,

            github

        });

    }

    catch (err) {

        await createApiLog(

            req,

            "GitHub API",

            "FAILED",

            req.query,

            {

                error: err.message

            }

        );

        res.status(500).json({

            success: false,

            message: "GitHub user not found"

        });

    }

};

module.exports = {

    getGithubUser

};