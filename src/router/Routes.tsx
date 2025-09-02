import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {
    JsonPlaceholderUsersComponent
} from "../components/json-placeholder-users-component/JsonPlaceholderUsersComponent.tsx";
import {DummyJsonUsersComponent} from "../components/dummy-json-users-component/DummyJsonUsersComponent.tsx";
import {DummyJsonPostsComponent} from "../components/dummyJsonPostsComponent/DummyJsonPostsComponent.tsx";
import {
    JsonPlaceholderPostsComponent
} from "../components/json-placeholder-posts-component/JsonPlaceholderPostsComponent.tsx";
import {DummyJsonCommentsComponent} from "../components/dummy-json-comments-component/DummyJsonCommentsComponent.tsx";

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
                            path: "dummyjson",
                            element: <DummyJsonUsersComponent/>,
                        },
                        {
                            path: "jsonplaceholder",
                            element: <JsonPlaceholderUsersComponent/>
                        }
                    ]
                },
                {
                    path: "posts",
                    element: <PostsPage/>,
                    children: [
                        {
                            path: "dummyjson",
                            element: <DummyJsonPostsComponent/>,
                        },
                        {
                            path: "jsonplaceholder",
                            element: <JsonPlaceholderPostsComponent/>
                        }
                    ]
                },
                {
                    path: "comments",
                    element: <CommentsPage/>,
                    children: [
                        {
                            path: "dummyjson",
                            element: <DummyJsonCommentsComponent/>,
                        },
                    ]
                },
                {
                    path: "products",
                    element: <ProductsPage/>
                }
            ]
        }
    ]
)