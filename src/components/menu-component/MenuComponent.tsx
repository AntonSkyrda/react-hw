import { Link } from "react-router";

export const MenuComponent = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/cars"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Cars
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cars/create"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                Create Car
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
