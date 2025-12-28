import type {FC, ReactNode} from "react";
import type {ISimpson} from "../../models/Simpson.ts";

type SimpsonComponentPropsType = {
    character: ISimpson;
    children: ReactNode;
}

export const CharacterComponent: FC<SimpsonComponentPropsType> = ({character, children}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h3 className="font-bold">{character.name} {character.surname}</h3>
            <p>{children}</p>
        </div>
    );
};