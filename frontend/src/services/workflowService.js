import api from "./api";

export const createWorkflow = async (workflow) => {

    const response = await api.post(

        "/workflows",

        workflow

    );

    return response.data;

};

export const getWorkflows = async () => {

    const response = await api.get(

        "/workflows"

    );

    return response.data;

};

export const deleteWorkflow = async (id) => {

    const response = await api.delete(

        `/workflows/${id}`

    );

    return response.data;

};