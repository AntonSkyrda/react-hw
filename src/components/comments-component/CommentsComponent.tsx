import {getAllComments} from "../../services/comment.service.ts";
import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getAllComments()
            .then((response) => {
                setComments(response)
            });
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};