import type {IDummyJsonComment} from "../../models/IDummyJsonComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IDummyJsonComment
}

export const DummyJsonCommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className="bg-white shadow w-100 p-2">
            <p className="border-2 p-2">
                {
                    comment.body
                }
            </p>

            <p className="text-center">
                <strong>Commented by:</strong>
                {
                    comment.user.username
                }
            </p>
        </div>
    );
};