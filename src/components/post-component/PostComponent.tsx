import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost;
}

export const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div className="bg-white shadow w-100 p-2">
            <h2 className="text-center font-bold">
                {
                    post.title
                }
            </h2>

            <p className="border-2 p-2">
                {
                    post.body
                }
            </p>
        </div>
    );
};