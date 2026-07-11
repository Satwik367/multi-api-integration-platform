import { useEffect, useState } from "react";

import {

    createWorkflow,
    getWorkflows,
    deleteWorkflow

} from "../services/workflowService";

function WorkflowBuilder() {

    const [name, setName] = useState("");

    const [description, setDescription] = useState("");

    const [steps, setSteps] = useState([]);

    const [workflows, setWorkflows] = useState([]);

    const apiOptions = [

        "Weather",
        "GitHub",
        "News",
        "Currency",
        "Gemini"

    ];

    const loadWorkflows = async () => {

        try {

            const data = await getWorkflows();

            setWorkflows(data.workflows);

        }

        catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        loadWorkflows();

    }, []);

    const addStep = () => {

        setSteps([

            ...steps,

            {

                api: "Weather"

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

            await createWorkflow({

                name,
                description,
                steps

            });

            setName("");

            setDescription("");

            setSteps([]);

            loadWorkflows();

        }

        catch (err) {

            console.log(err);

        }

    };

    const removeWorkflow = async (id) => {

        await deleteWorkflow(id);

        loadWorkflows();

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">

                Workflow Builder

            </h1>

            <div className="bg-white shadow rounded-lg p-6">

                <input

                    className="border p-3 rounded w-full mb-4"

                    placeholder="Workflow Name"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                />

                <textarea

                    className="border p-3 rounded w-full mb-4"

                    placeholder="Description"

                    value={description}

                    onChange={(e)=>setDescription(e.target.value)}

                />

                {

                    steps.map((step,index)=>(

                        <select

                            key={index}

                            className="border p-3 rounded w-full mb-3"

                            value={step.api}

                            onChange={(e)=>updateStep(index,e.target.value)}

                        >

                            {

                                apiOptions.map((api)=>(

                                    <option

                                        key={api}

                                    >

                                        {api}

                                    </option>

                                ))

                            }

                        </select>

                    ))

                }

                <div className="flex gap-4 mt-4">

                    <button

                        onClick={addStep}

                        className="bg-blue-600 text-white px-6 py-2 rounded"

                    >

                        Add Step

                    </button>

                    <button

                        onClick={saveWorkflow}

                        className="bg-green-600 text-white px-6 py-2 rounded"

                    >

                        Save Workflow

                    </button>

                </div>

            </div>

            <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">

                    Saved Workflows

                </h2>

                {

                    workflows.map((workflow)=>(

                        <div

                            key={workflow._id}

                            className="bg-white shadow rounded-lg p-6 mb-5"

                        >

                            <h2 className="text-xl font-bold">

                                {workflow.name}

                            </h2>

                            <p>

                                {workflow.description}

                            </p>

                            <div className="mt-3">

                                {

                                    workflow.steps.map((step,index)=>(

                                        <span

                                            key={index}

                                            className="bg-blue-100 px-3 py-1 rounded mr-2"

                                        >

                                            {step.api}

                                        </span>

                                    ))

                                }

                            </div>

                            <button

                                onClick={()=>removeWorkflow(workflow._id)}

                                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"

                            >

                                Delete

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default WorkflowBuilder;