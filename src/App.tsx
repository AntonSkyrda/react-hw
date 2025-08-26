import './App.css'
import {CommentsComponent} from "./components/comments-component/CommentsComponent.tsx";
import {TodosComponent} from "./components/todos-component/TodosComponent.tsx";
import {PostsComponent} from "./components/posts-component/PostsComponent.tsx";

function App() {

    return (
        <>
            <TodosComponent/>
            <PostsComponent/>
            <CommentsComponent/>
        </>
    )
}

export default App
