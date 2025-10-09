import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import type {IComment} from "../../models/IComment.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(
        (state) => state.commentStoreSlice.comments
    );
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, [dispatch]);

    return (
        <div className="flex gap-4 flex-col items-center">
            {
                comments.map((comment: IComment) => (
                    <CommentComponent key={comment.id} comment={comment}/>
                ))
            }
        </div>
    );
};