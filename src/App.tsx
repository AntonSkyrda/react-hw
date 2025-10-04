import './App.css'
import {UseFetch} from "./hooks/UseFetch.tsx";
import type {IUser} from "./models/IUser.ts";

function App() {
    const users = UseFetch<IUser[]>(`${import.meta.env.VITE_API_JSONPLACEHOLDER_URL}users`, []);
    console.log(users);
    return (
        <div>
            {
                users && users.map((user: IUser) => (
                    <div key={user.id}>
                        User Name: {user.username}
                    </div>
                ))
            }
        </div>
    )
}

export default App
