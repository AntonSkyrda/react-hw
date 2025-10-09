import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/posts"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/comments"
                                className="hover:text-blue-400 transition-colors duration-200">
                                Comments
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/complex"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Complex
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};