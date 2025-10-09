import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {useEffect} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(
        (state) => state.userStoreSlice.users
    );
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [dispatch]);

    return (
        <div className="flex gap-4 flex-col items-center">
            {
                users.map((user: IUser) => (
                    <UserComponent key={user.id} user={user} />
                ))
            }
        </div>
    );
};