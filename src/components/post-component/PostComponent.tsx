import type { IPost } from "../../models/IPost";
import type { FC } from "react";

type PostPropsType = {
    post: IPost;
};

export const PostComponent: FC<PostPropsType> = ({ post }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                </h2>

                <p className="text-gray-600 mb-4">{post.body}</p>

                <p className="text-sm text-gray-500 border-t pt-2">
                    Posted by <span className="font-medium text-blue-600">User #{post.userId}</span>
                </p>
            </div>
        </div>
    );
};
