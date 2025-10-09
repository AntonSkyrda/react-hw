import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment;
}

export const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {comment.name}
                </h2>

                <p className="text-gray-600 mb-4">{comment.body}</p>

                <p className="text-sm text-gray-500 border-t pt-2">
                    Comment to <span className="font-medium text-blue-600">Post #{comment.postId}</span>
                </p>
                <p className="text-sm text-gray-500 border-t pt-2">
                    Email: <span className="font-medium text-blue-600">{comment.email}</span>
                </p>
            </div>
        </div>
    );
};