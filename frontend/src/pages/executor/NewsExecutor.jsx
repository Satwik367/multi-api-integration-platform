import { useState } from "react";

import { getNews } from "../../services/newsService";

function NewsExecutor() {

    const [query, setQuery] = useState("");

    const [articles, setArticles] = useState([]);

    const searchNews = async () => {

        try {

            const data = await getNews(query);

            setArticles(data.articles);

        }

        catch {

            alert("Unable to fetch news");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">

                News API

            </h1>

            <div className="flex gap-4">

                <input

                    className="border p-3 rounded w-96"

                    placeholder="Search Topic"

                    value={query}

                    onChange={(e)=>setQuery(e.target.value)}

                />

                <button

                    onClick={searchNews}

                    className="bg-red-600 text-white px-6 rounded"

                >

                    Search

                </button>

            </div>

            {

                articles.length > 0 && (

                    <div className="mt-8 space-y-6">

                        {

                            articles.map((article,index)=>(

                                <div

                                    key={index}

                                    className="bg-white shadow rounded-lg p-6"

                                >

                                    <h2 className="text-xl font-bold">

                                        {article.title}

                                    </h2>

                                    <p className="mt-3">

                                        {article.description}

                                    </p>

                                    <a

                                        href={article.url}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-blue-600"

                                    >

                                        Read Full Article

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