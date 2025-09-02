import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <div className="h-16 flex items-center justify-center">
                <ul className="flex gap-8">
                    <li>
                        <Link to={"/comments/dummyjson"}>DUMMYJSON Comments</Link>
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