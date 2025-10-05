import './App.css'
import {B} from "./components/B.tsx";
import {A} from "./components/A.tsx";
import { MyContext } from './context/MyContextProvider.tsx';
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState("light");

    return (
        <div className="flex flex-col gap-4 items-center min-h-screen">
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue);
                }
            }}
            >
                <A/>
                <B/>
            </MyContext.Provider>
        </div>
    )
}

export default App
