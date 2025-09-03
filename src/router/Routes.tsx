import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: "users",
                    element: <UsersPage/>,
                    children: [
                        {
                            path: ":id/carts",
                            element: <CartsPage/>
                        }
                    ]
                },
                {
                    path: "posts",
                    element: <PostsPage/>
                },
                {
                    path: "comments",
                    element: <CommentsPage/>,
                },
                {
                    path: "products",
                    element: <ProductsPage/>
                }
            ]
        }
    ]
)