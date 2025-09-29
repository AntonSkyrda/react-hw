import axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_OWU_URL}/carsAPI/v1/`,
    headers: {
        "Content-Type": "application/json",
    }
})

export const getCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get("cars");
    return data;
}

export const addCar = async (car: ICar): Promise<void> => {
    return await axiosInstance.post("cars", car)
}