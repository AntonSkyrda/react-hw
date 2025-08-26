import type {ITodo} from "../models/ITodo.ts";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = async (): Promise<ITodo[]> => {
    return await fetch(baseUrl).
        then(response => response.json())
}