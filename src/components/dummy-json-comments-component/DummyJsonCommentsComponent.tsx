import {useEffect, useState} from "react";
import type {IDummyJsonComment} from "../../models/IDummyJsonComment.ts";
import {dummyJsonService} from "../../service/api.service.ts";
import {DummyJsonCommentComponent} from "../dummy-json-comment-component/DummyJsonCommentComponent.tsx";

export const DummyJsonCommentsComponent = () => {
    const [comments, setComments] = useState<IDummyJsonComment[]>([]);

    useEffect(() => {
        dummyJsonService.commentService.getAllComments().then(allComments => {
            setComments(allComments);
        })
    })
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                comments.map((comment: IDummyJsonComment) =>  <DummyJsonCommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    );
};