import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
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
                        user.firstName
                    }
                </p>
                <p>
                    {
                        user.lastName
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