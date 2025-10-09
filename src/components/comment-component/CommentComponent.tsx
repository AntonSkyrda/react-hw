import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment;
}

export const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">{comment.name}</h2>
            <p>Post id: {comment.postId}</p>
            <p>User email: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};