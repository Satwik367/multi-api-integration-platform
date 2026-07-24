import { useState } from "react";

import { getNews } from "../../services/newsService";
import Button from "../../components/ui/Button";

function NewsExecutor() {

    const [query, setQuery] = useState("");

    const [articles, setArticles] = useState([]);

    const [loading, setLoading] = useState(false);

    const searchNews = async () => {

        try {

            setLoading(true);

            const data = await getNews(query);

            setArticles(data.articles);

        }

        catch {

            alert("Unable to fetch news");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    News API

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Search the latest headlines on any topic.

                </p>

            </div>

            <div className="flex gap-4">

                <input

                    className="w-full max-w-md rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors"

                    placeholder="Search topic"

                    value={query}

                    onChange={(e)=>setQuery(e.target.value)}

                />

                <Button

                    onClick={searchNews}

                    loading={loading}

                >

                    Search

                </Button>

            </div>

            {

                articles.length > 0 && (

                    <div className="mt-8 space-y-5">

                        {

                            articles.map((article,index)=>(

                                <div

                                    key={index}

                                    className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6"

                                >

                                    <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">

                                        {article.title}

                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">

                                        {article.description}

                                    </p>

                                    <a

                                        href={article.url}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="mt-4 inline-block text-sm font-medium text-[var(--color-signal-indigo)] hover:opacity-80"

                                    >

                                        Read full article →

                                    </a>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default NewsExecutor;
