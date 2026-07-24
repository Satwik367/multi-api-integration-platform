import { useEffect, useState } from "react";

import {
    createWorkflow,
    getWorkflows,
    deleteWorkflow
} from "../services/workflowService";

import {
    runWorkflow
} from "../services/workflowExecutionService";

import Button from "../components/ui/Button";

function WorkflowBuilder() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [steps, setSteps] = useState([]);

    const [workflows, setWorkflows] = useState([]);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState("");

    const apiOptions = [

        "Weather",

        "GitHub",

        "News",

        "Gemini"

    ];

    useEffect(() => {

        loadWorkflows();

    }, []);

    const loadWorkflows = async () => {

        try {

            const data = await getWorkflows();

            setWorkflows(data.workflows);

        }

        catch (err) {

            console.log(err);

        }

    };

    const addStep = () => {

        setSteps([

            ...steps,

            {

                api: "Weather",

                config: {}

            }

        ]);

    };

    const updateStep = (index, value) => {

        const temp = [...steps];

        temp[index].api = value;

        setSteps(temp);

    };

    const saveWorkflow = async () => {

        try {

            if (!name.trim()) {

                alert("Workflow name is required");

                return;

            }

            if (steps.length === 0) {

                alert("Add at least one step");

                return;

            }

            setLoading(true);

            await createWorkflow({

                name,

                description,

                steps

            });

            setName("");

            setDescription("");

            setSteps([]);

            await loadWorkflows();

            alert("Workflow saved");

        }

        catch (err) {

            console.log(err);

            alert("Failed to save workflow");

        }

        finally {

            setLoading(false);

        }

    };

    const removeWorkflow = async (id) => {

        try {

            await deleteWorkflow(id);

            await loadWorkflows();

        }

        catch (err) {

            console.log(err);

        }

    };

    const executeWorkflow = async (id) => {

        try {

            setLoading(true);

            const data = await runWorkflow(id);

            setResult(data.output);

        }

        catch (err) {

            console.log(err);

            alert("Workflow execution failed");

        }

        finally {

            setLoading(false);

        }

    };

    const inputClasses = "rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-3 w-full text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors";

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    Workflow Builder

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Chain multiple APIs together into a single reusable pipeline.

                </p>

            </div>

            <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7">

                <input

                    className={`${inputClasses} mb-4`}

                    placeholder="Workflow name"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                />

                <textarea

                    className={`${inputClasses} mb-4`}

                    rows="3"

                    placeholder="Workflow description"

                    value={description}

                    onChange={(e)=>setDescription(e.target.value)}

                />

                <div className="space-y-3">

                    {

                        steps.map((step,index)=>(

                            <select

                                key={index}

                                className={inputClasses}

                                value={step.api}

                                onChange={(e)=>updateStep(index,e.target.value)}

                            >

                                {

                                    apiOptions.map((api)=>(

                                        <option

                                            key={api}

                                            value={api}

                                        >

                                            {api}

                                        </option>

                                    ))

                                }

                            </select>

                        ))

                    }

                </div>

                <div className="flex gap-4 mt-6">

                    <Button

                        variant="secondary"

                        onClick={addStep}

                    >

                        Add step

                    </Button>

                    <Button

                        variant="success"

                        loading={loading}

                        onClick={saveWorkflow}

                    >

                        Save workflow

                    </Button>

                </div>

            </div>

            <div className="mt-10">

                <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-5">

                    Saved workflows

                </h2>

                {

                    workflows.length===0

                    ?

                    (

                        <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-ink-muted)]">

                            No workflows created yet.

                        </div>

                    )

                    :

                    workflows.map((workflow)=>(

                        <div

                            key={workflow._id}

                            className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 mb-6"

                        >

                            <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                                {workflow.name}

                            </h3>

                            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                                {workflow.description}

                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">

                                {

                                    workflow.steps.map((step,index)=>(

                                        <span

                                            key={index}

                                            className="rounded-full bg-[var(--color-signal-indigo-soft)] text-[var(--color-signal-indigo)] px-4 py-1.5 text-sm font-medium"

                                        >

                                            {step.api}

                                        </span>

                                    ))

                                }

                            </div>

                            <div className="flex gap-4 mt-6">

                                <Button

                                    variant="success"

                                    onClick={()=>executeWorkflow(workflow._id)}

                                >

                                    Run workflow

                                </Button>

                                <Button

                                    variant="danger"

                                    onClick={()=>removeWorkflow(workflow._id)}

                                >

                                    Delete

                                </Button>

                            </div>

                        </div>

                    ))

                }

            </div>

            {

                result &&

                <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 mt-10">

                    <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)] mb-4">

                        Workflow output

                    </h2>

                    <pre className="font-data whitespace-pre-wrap text-sm text-[var(--color-ink-muted)]">

                        {result}

                    </pre>

                </div>

            }

        </div>

    );

}

export default WorkflowBuilder;