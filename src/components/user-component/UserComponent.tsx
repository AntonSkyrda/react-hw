import type {IUser} from "../../models/IUser.ts";
import {type FC} from "react";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(`/users/${user.id}/carts`)
    }

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
            <button className="mx-auto flex px-2 py-2 bg-blue-600 text-white rounded transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={onButtonClick} >
                Show user`s carts
            </button>
        </div>
    );
};