import {useEffect, useState} from "react";
import {getAllTodosDummyJson} from "../../services/api.service.ts";
import {TodoDummyJsonComponent} from "../todo-dummy-json-component/TodoDummyJsonComponent.tsx";
import type {ITodoDummyJson} from "../../models/ITodoDummyJson.ts";

export const TodosDummyJsonComponent = () => {
    const [todos, setTodos] = useState<ITodoDummyJson[]>([]);
    useEffect(() => {
        getAllTodosDummyJson()
            .then((response) => {
                setTodos(response)
            })
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                todos.map(task => <TodoDummyJsonComponent key={task.id} task={task} />)
            }
        </div>
    );
};
