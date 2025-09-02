import type {IJsonPlaceholderUser} from "../../models/IJsonPlaceholderUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IJsonPlaceholderUser
}

export const JsonPlaceholderUserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div className="bg-white shadow w-100 p-2">
            <h2 className="text-center font-bold">
                {
                    user.username
                }
            </h2>
            <div className="flex justify-around">
                <p>
                    {
                        user.name
                    }
                </p>
            </div>
            <p className="text-center">
                <strong>Email:</strong>
                {
                    user.email
                }
            </p>
        </div>
    );
};