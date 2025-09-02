import type {IJsonPlaceholderPost} from "../../models/IJsonPlaceholderPost.ts";
import type {FC} from "react";

type postPropsType = {
    post: IJsonPlaceholderPost
}

export const JsonPlaceholderPostComponent: FC<postPropsType> = ({post}) => {
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