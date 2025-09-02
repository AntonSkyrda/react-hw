import {useEffect, useState} from "react";
import {dummyJsonService} from "../../service/api.service.ts";
import type {IDummyJsonPost} from "../../models/IDummyJsonPosts.ts";
import {DummyJsonPostComponent} from "../dummy-json-post-component/DummyJsonPostComponent.tsx";

export const DummyJsonPostsComponent = () => {
    const [posts, setPosts] = useState<IDummyJsonPost[]>([])

    useEffect(() => {
        dummyJsonService.postService.getAllPosts().then(allPosts => {
            setPosts(allPosts)
        })
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                posts.map((post: IDummyJsonPost) =>  <DummyJsonPostComponent key={post.id} post={post} />)
            }
        </div>
    );
};