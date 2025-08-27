import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost;
}

export const PostComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">{post.title}</h2>
            <p>User id: {post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};