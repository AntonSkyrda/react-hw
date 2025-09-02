import {useEffect, useState} from "react";
import type {IJsonPlaceholderPost} from "../../models/IJsonPlaceholderPost.ts";
import {jsonPlaceholderService} from "../../service/api.service.ts";
import {JsonPlaceholderPostComponent} from "../json-placeholder-post-component/JsonPlaceholderPostComponent.tsx";

export const JsonPlaceholderPostsComponent = () => {
    const [posts, setPosts] = useState<IJsonPlaceholderPost[]>([]);

    useEffect(() => {
        jsonPlaceholderService.postService.getAllPosts().then(allPosts => {
            setPosts(allPosts);
        });
    })
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                posts.map((post: IJsonPlaceholderPost) => <JsonPlaceholderPostComponent key={post.id} post={post} />)
            }
        </div>
    );
};