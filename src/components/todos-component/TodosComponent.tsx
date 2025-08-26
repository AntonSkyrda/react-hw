import {useEffect, useState} from "react";
import {getAllTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import type {ITodo} from "../../models/ITodo.ts";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getAllTodos()
            .then((response) => {
                setTodos(response)
            })
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                todos.map(task => <TodoComponent key={task.id} task={task} />)
            }
        </div>
    );
};