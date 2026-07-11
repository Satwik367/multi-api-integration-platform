import api from "./api";

export const convertCurrency = async (from, to, amount) => {

    const response = await api.get(
        `/currency?from=${from}&to=${to}&amount=${amount}`
    );

    return response.data;

};