import type {FC} from "react";
import type {IPostsDummyJson} from "../../models/IPostDummyJson.ts";

type PostPropsType = {
    post: IPostsDummyJson;
}

export const PostDummyJsonComponent:FC<PostPropsType> = ({post}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">{post.title}</h2>
            <p>User id: {post.userId}</p>
            <p>{post.body}</p>
            <ul className="flex gap-2">
                {
                    post.tags.map((tag, index) => <li className="items-center gap-x-4 rounded-xl bg-white p-1 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10" key={index}>{tag}</li>)
                }
            </ul>
            <div className="flex gap-4">
                <p>Likes: {post.reactions.likes}</p>
                <p>Dislikes: {post.reactions.dislikes}</p>
            </div>
            <p>Total views: {post.views}</p>
        </div>
    );
};