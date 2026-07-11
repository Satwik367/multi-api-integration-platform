import { useState } from "react";

import { askGemini } from "../../services/geminiService";

function GeminiExecutor() {

    const [prompt, setPrompt] = useState("");

    const [answer, setAnswer] = useState("");

    const execute = async () => {

        const res = await askGemini(prompt);

        setAnswer(res.response);

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                Gemini AI

            </h1>

            <textarea

                rows="6"

                className="border p-4 rounded w-full mt-6"

                value={prompt}

                onChange={(e)=>setPrompt(e.target.value)}

            />

            <button

                onClick={execute}

                className="bg-purple-600 text-white px-6 py-3 rounded mt-4"

            >

                Ask AI

            </button>

            {

                answer && (

                    <div className="bg-white shadow p-6 rounded mt-8">

                        {answer}

                    </div>

                )

            }

        </div>

    );

}

export default GeminiExecutor;