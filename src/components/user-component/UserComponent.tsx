import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type usersPropsType = {
    user: IUser;
}

export const UserComponent: FC <usersPropsType> = ({user}) => {
    return (
        <div>
            <p>
                <span className="font-bold">User full name: </span>
                {
                    `${user.firstName} ${user.lastName}`
                }
            </p>
        </div>
    );
};