const axios = require("axios");

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

        const user = response.data;

        res.json({

            success: true,

            github: {

                name: user.name,

                username: user.login,

                avatar: user.avatar_url,

                followers: user.followers,

                following: user.following,

                repositories: user.public_repos,

                profile: user.html_url,

                bio: user.bio,

                company: user.company,

                location: user.location

            }

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: "GitHub user not found"

        });

    }

};

module.exports = {

    getGithubUser

};