import { useState } from "react";

import { getGithub } from "../../services/githubService";

function GithubExecutor() {

    const [username, setUsername] = useState("");

    const [data, setData] = useState(null);

    const execute = async () => {

        try {

            const res = await getGithub(username);

            setData(res.github);

        }

        catch {

            alert("User Not Found");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                GitHub API

            </h1>

            <div className="flex gap-4 mt-6">

                <input

                    className="border p-3 rounded w-80"

                    placeholder="GitHub Username"

                    value={username}

                    onChange={(e)=>setUsername(e.target.value)}

                />

                <button

                    className="bg-black text-white px-6 rounded"

                    onClick={execute}

                >

                    Execute

                </button>

            </div>

            {

                data && (

                    <div className="bg-white shadow rounded-lg p-6 mt-8">

                        <img

                            src={data.avatar}

                            className="w-28 rounded-full"

                        />

                        <h2 className="text-2xl font-bold mt-4">

                            {data.name}

                        </h2>

                        <p>@{data.username}</p>

                        <p>Followers : {data.followers}</p>

                        <p>Following : {data.following}</p>

                        <p>Repositories : {data.repositories}</p>

                        <p>{data.location}</p>

                        <a

                            href={data.profile}

                            target="_blank"

                            className="text-blue-600"

                        >

                            Visit Profile

                        </a>

                    </div>

                )

            }

        </div>

    );

}

export default GithubExecutor;