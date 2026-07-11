import api from "./api";

export const getGithub = async (username) => {

    const response = await api.get(

        `/github?username=${username}`

    );

    return response.data;

};