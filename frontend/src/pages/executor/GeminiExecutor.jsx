import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { askGemini } from "../../services/geminiService";
import Button from "../../components/ui/Button";

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

                "Gemini API failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    Gemini AI Assistant

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Ask Google's Gemini anything and get a live response.

                </p>

            </div>

            <textarea

                rows="6"

                className="w-full rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-4 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors"

                placeholder="Ask Gemini anything..."

                value={prompt}

                onChange={(e)=>setPrompt(e.target.value)}

            />

            <Button

                className="mt-5"

                loading={loading}

                onClick={execute}

            >

                {loading ? "Thinking..." : "Ask AI"}

            </Button>

            {

                answer &&

                <div className="md-content mt-8 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 text-[var(--color-ink-muted)]">

                    <ReactMarkdown>

                        {answer}

                    </ReactMarkdown>

                </div>

            }

        </div>

    );

}

export default GeminiExecutor;