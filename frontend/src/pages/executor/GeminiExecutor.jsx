import { useState } from "react";
import { askGemini } from "../../services/geminiService";

function GeminiExecutor() {

    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const execute = async () => {

        try {

            setLoading(true);

            const res = await askGemini(prompt);

            setAnswer(res.response);

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Gemini API Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                Gemini AI

            </h1>

            <textarea

                rows="6"

                className="border p-4 rounded w-full mt-6"

                placeholder="Ask Gemini..."

                value={prompt}

                onChange={(e)=>setPrompt(e.target.value)}

            />

            <button

                onClick={execute}

                disabled={loading}

                className="bg-purple-600 text-white px-6 py-3 rounded mt-4"

            >

                {

                    loading

                    ?

                    "Thinking..."

                    :

                    "Ask AI"

                }

            </button>

            {

                answer &&

                <div className="bg-white shadow p-6 rounded mt-8">

                    {answer}

                </div>

            }

        </div>

    );

}

export default GeminiExecutor;