import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_JSONPLACEHOLDER_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export const getAll = async <T, >(endpoint: string) => {
    const {data} = await axiosInstance.get(endpoint);
    return data as T;
}

axiosInstance.interceptors.request.use((request) => {
    return request
})

axiosInstance.interceptors.response.use((response) => {
    return response;
})