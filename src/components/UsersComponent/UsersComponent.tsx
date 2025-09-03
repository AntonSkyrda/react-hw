import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {services} from "../../services/api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        services.getUsers().then(allUsers => {
            setUsers(allUsers)
        })
    })
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                users.map((user: IUser) =>  <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};