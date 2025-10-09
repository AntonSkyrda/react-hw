import {getAllCommentsDummyJson} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import type {ICommentsDummyJson} from "../../models/ICommentDummyJson.ts";
import {CommentComponentDummyJson} from "../comment-dummy-json-component/CommentDummyJsonComponent.tsx";

export const CommentsDummyJsonComponent = () => {
    const [comments, setComments] = useState<ICommentsDummyJson[]>([]);
    useEffect(() => {
        getAllCommentsDummyJson()
            .then((response) => {
                setComments(response)
            });
    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                comments.map(comment => <CommentComponentDummyJson key={comment.id} comment={comment}/>)
            }
        </div>
    );
};