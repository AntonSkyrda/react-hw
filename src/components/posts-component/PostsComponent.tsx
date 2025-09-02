import {useEffect, useState} from "react";
import {services} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import type {IPost} from "../../models/IPost.ts";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        services.getPosts().then((allPosts) => {
            setPosts(allPosts);
        })
    })

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                posts.map((post) => <PostComponent key={post.id} post={post} />)
            }
        </div>
    );
};