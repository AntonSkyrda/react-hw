import type {FC} from "react";
import type {ICommentsDummyJson} from "../../models/ICommentDummyJson.ts";

type CommentPropsType = {
    comment: ICommentsDummyJson;
}

export const CommentComponentDummyJson: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">Commented by: {comment.user.username}</h2>
            <p>Post id: {comment.postId}</p>
            <p>{comment.body}</p>
        </div>
    );
};