import api from "./api";

export const askGemini = async (prompt) => {

    const response = await api.post(

        "/gemini",

        {

            prompt

        }

    );

    return response.data;

};