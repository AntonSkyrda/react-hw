import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

export const B1 = () => {

    const {changeTheme} = useContext(MyContext)


    const handleThemeDark = () => {
        changeTheme("dark");
    }

    const handleThemeLight = () => {
        changeTheme("light");
    }

    return (
        <div>
            B1
            <div className="flex gap-4">
                <button onClick={handleThemeDark} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                >Change Theme to Dark</button>
                <button onClick={handleThemeLight} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                >Change Theme to Light</button>
            </div>
        </div>
    );
};