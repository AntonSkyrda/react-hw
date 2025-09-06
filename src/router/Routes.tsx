import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <UsersPage/>
        }
    ]
)