import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

type TodoPropsType = {
    task: ITodo;
}

export const TodoComponent: FC<TodoPropsType> = ({task}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10" >
            <h2 className="text-center font-bold">{task.title}</h2>
            <p>User id: {task.userId}</p>
            <p>Completed: {`${task.completed}`}</p>
        </div>
    );
};