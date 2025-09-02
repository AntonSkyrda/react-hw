import {Link, Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <div className="h-16 flex items-center justify-center">
                <ul className="flex gap-8">
                    <li>
                        <Link to={"/posts/jsonplaceholder"}>JSONPlaceholder Posts</Link>
                    </li>
                    <li>
                        <Link to={"/posts/dummyjson"}>DUMMYJSON Posts</Link>
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