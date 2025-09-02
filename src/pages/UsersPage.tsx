import {Outlet, Link} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <div className="h-16 flex items-center justify-center">
                <ul className="flex gap-8">
                    <li>
                        <Link to={"/users/jsonplaceholder"}>JSONPlaceholder Users</Link>
                    </li>
                    <li>
                        <Link to={"/users/dummyjson"}>DUMMYJSON Users</Link>
                    </li>
                </ul>
            </div>

            <hr/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};
