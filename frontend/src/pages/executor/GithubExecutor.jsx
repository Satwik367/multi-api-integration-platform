import { useState } from "react";

import { getGithub } from "../../services/githubService";
import Button from "../../components/ui/Button";

function GithubExecutor() {

    const [username, setUsername] = useState("");

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(false);

    const execute = async () => {

        try {

            setLoading(true);

            const res = await getGithub(username);

            setData(res.github);

        }

        catch {

            alert("User not found");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    GitHub API

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Look up a GitHub user's profile and repositories.

                </p>

            </div>

            <div className="flex gap-4">

                <input

                    className="w-full max-w-md rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors"

                    placeholder="GitHub username"

                    value={username}

                    onChange={(e)=>setUsername(e.target.value)}

                />

                <Button

                    onClick={execute}

                    loading={loading}

                >

                    Execute

                </Button>

            </div>

            {

                data && (

                    <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 mt-8 max-w-md">

                        <img

                            src={data.avatar}

                            className="w-20 rounded-full border border-[var(--color-hairline)]"

                        />

                        <h2 className="font-display mt-4 text-xl font-semibold text-[var(--color-ink)]">

                            {data.name}

                        </h2>

                        <p className="font-data text-sm text-[var(--color-ink-muted)]">@{data.username}</p>

                        <div className="mt-4 space-y-1.5 text-sm text-[var(--color-ink-muted)]">
                            <p>Followers: <span className="font-data text-[var(--color-ink)]">{data.followers}</span></p>
                            <p>Following: <span className="font-data text-[var(--color-ink)]">{data.following}</span></p>
                            <p>Repositories: <span className="font-data text-[var(--color-ink)]">{data.repositories}</span></p>
                            <p>{data.location}</p>
                        </div>

                        <a

                            href={data.profile}

                            target="_blank"

                            rel="noreferrer"

                            className="mt-4 inline-block text-sm font-medium text-[var(--color-signal-indigo)] hover:opacity-80"

                        >

                            Visit profile →

                        </a>

                    </div>

                )

            }

        </div>

    );

}

export default GithubExecutor;
