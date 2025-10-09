import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type userPropsType = {
    user: IUser;
}

export const UserComponent: FC<userPropsType> = ({user}) => {
    return (
        <div>
            <p className="font-bold">
                User`s name:
                {
                    `${user.name}`
                }
            </p>
        </div>
    );
};