import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className="h-16 flex items-center justify-center">
            <ul className="flex gap-8">
                <li>
                    <Link to={""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"users"}>
                        Users
                    </Link>
                </li>
                <li>
                    <Link to={"posts"}>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link to={"comments"}>
                        Comments
                    </Link>
                </li>
                <li>
                    <Link to={"products"}>
                        Products
                    </Link>
                </li>
            </ul>

        </div>
    );
};