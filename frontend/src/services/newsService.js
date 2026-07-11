import api from "./api";

export const getNews = async (query) => {

    const response = await api.get(

        `/news?query=${query}`

    );

    return response.data;

};