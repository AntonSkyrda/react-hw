import {createContext} from "react";

type ContextPropsType = {
    theme: string;
    changeTheme: (theme: string) => void;
}

const defaultValue: ContextPropsType = {
    theme: "light",
    changeTheme: (theme: string) => {
        console.log(theme);
    }
}

export const MyContext = createContext<ContextPropsType>(defaultValue);