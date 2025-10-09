import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import type {IPost} from "../../models/IPost.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(
        (state) => state.postStoreSlice.posts
    );

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, [dispatch])

    return (
        <div className="flex gap-4 flex-col items-center">
            {
                posts.map((post: IPost) => (
                    <PostComponent key={post.id} post={post} />
                ))
            }
        </div>
    );
};