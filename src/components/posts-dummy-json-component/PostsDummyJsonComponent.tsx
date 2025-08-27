import {useEffect, useState} from "react";
import {getAllPostsDummyJson} from "../../services/api.service.ts";
import type {IPostsDummyJson} from "../../models/IPostDummyJson.ts";
import {PostDummyJsonComponent} from "../post-dummy-json-component/PostDummyJsonComponent.tsx";

export const PostsDummyJsonComponent = () => {
    const [posts, setPosts] = useState<IPostsDummyJson[]>([]);
    useEffect(() => {
        getAllPostsDummyJson()
            .then((response) => {
                setPosts(response)
            })
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                posts.map(post => <PostDummyJsonComponent key={post.id} post={post}/>)
            }
        </div>
    )
}