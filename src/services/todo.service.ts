import type {ITodo} from "../models/ITodo.ts";

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = async (): Promise<ITodo[]> => {
    return await fetch(todosUrl).
        then(response => response.json())
}