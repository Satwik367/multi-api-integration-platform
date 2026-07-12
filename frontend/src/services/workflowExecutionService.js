import api from "./api";

/**
 * Execute a workflow by ID
 */
export const runWorkflow = async (workflowId) => {

    const response = await api.post(

        `/workflows/${workflowId}/run`

    );

    return response.data;

};