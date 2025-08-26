import type {IPost} from "../../models/IPost.ts";
import {getAllPosts} from "../../services/post.service.ts";
import {useEffect, useState} from "react";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAllPosts()
            .then((response) => {
                setPosts(response)
            })
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    )
}