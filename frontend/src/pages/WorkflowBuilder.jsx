import { useEffect, useState } from "react";

import {
    createWorkflow,
    getWorkflows,
    deleteWorkflow
} from "../services/workflowService";

import {
    runWorkflow
} from "../services/workflowExecutionService";

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

            alert("Workflow Saved");

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

            alert("Workflow Execution Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="p-8 bg-slate-100 min-h-screen">

            <h1 className="text-4xl font-bold mb-8">

                Workflow Builder

            </h1>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <input

                    className="border rounded-lg p-3 w-full mb-4"

                    placeholder="Workflow Name"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                />

                <textarea

                    className="border rounded-lg p-3 w-full mb-4"

                    rows="3"

                    placeholder="Workflow Description"

                    value={description}

                    onChange={(e)=>setDescription(e.target.value)}

                />

                <div className="space-y-3">

                    {

                        steps.map((step,index)=>(

                            <select

                                key={index}

                                className="border rounded-lg p-3 w-full"

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

                    <button

                        onClick={addStep}

                        className="bg-blue-600 text-white px-5 py-3 rounded-lg"

                    >

                        Add Step

                    </button>

                    <button

                        disabled={loading}

                        onClick={saveWorkflow}

                        className="bg-green-600 text-white px-5 py-3 rounded-lg"

                    >

                        {

                            loading

                            ?

                            "Saving..."

                            :

                            "Save Workflow"

                        }

                    </button>

                </div>

            </div>

            <div className="mt-10">

                <h2 className="text-3xl font-bold mb-5">

                    Saved Workflows

                </h2>

                {

                    workflows.length===0

                    ?

                    (

                        <div className="bg-white rounded-lg shadow p-6">

                            No workflows created yet.

                        </div>

                    )

                    :

                    workflows.map((workflow)=>(

                        <div

                            key={workflow._id}

                            className="bg-white rounded-xl shadow-lg p-6 mb-6"

                        >

                            <h3 className="text-2xl font-bold">

                                {workflow.name}

                            </h3>

                            <p className="text-gray-600 mt-2">

                                {workflow.description}

                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">

                                {

                                    workflow.steps.map((step,index)=>(

                                        <span

                                            key={index}

                                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

                                        >

                                            {step.api}

                                        </span>

                                    ))

                                }

                            </div>

                            <div className="flex gap-4 mt-6">

                                <button

                                    onClick={()=>executeWorkflow(workflow._id)}

                                    className="bg-green-600 text-white px-5 py-2 rounded-lg"

                                >

                                    Run Workflow

                                </button>

                                <button

                                    onClick={()=>removeWorkflow(workflow._id)}

                                    className="bg-red-600 text-white px-5 py-2 rounded-lg"

                                >

                                    Delete

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

            {

                result &&

                <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

                    <h2 className="text-3xl font-bold mb-4">

                        Workflow Output

                    </h2>

                    <pre className="whitespace-pre-wrap">

                        {result}

                    </pre>

                </div>

            }

        </div>

    );

}

export default WorkflowBuilder;