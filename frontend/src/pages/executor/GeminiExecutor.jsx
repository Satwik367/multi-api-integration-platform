import { useState } from "react";
import ReactMarkdown from "react-markdown";
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

            <h1 className="text-3xl font-bold mb-6">

                Gemini AI Assistant

            </h1>

            <textarea

                rows="6"

                className="border rounded-lg w-full p-4"

                placeholder="Ask Gemini anything..."

                value={prompt}

                onChange={(e)=>setPrompt(e.target.value)}

            />

            <button

                className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-lg"

                disabled={loading}

                onClick={execute}

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

                <div className="bg-white mt-8 shadow rounded-xl p-6 prose max-w-none">

                    <ReactMarkdown>

                        {answer}

                    </ReactMarkdown>

                </div>

            }

        </div>

    );

}

export default GeminiExecutor;