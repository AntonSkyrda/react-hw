import {useEffect, useState} from "react";
import type {IJsonPlaceholderUser} from "../../models/IJsonPlaceholderUser.ts";
import {jsonPlaceholderService} from "../../service/api.service.ts";
import {JsonPlaceholderUserComponent} from "../json-placeholder-user-component/JsonPlaceholderUserComponent.tsx";


export const JsonPlaceholderUsersComponent = () => {
    const [users, setUsers] = useState<IJsonPlaceholderUser[]>([]);

    useEffect(() => {
        jsonPlaceholderService.userService.getAllUsers().then(allUsers => {
            setUsers(allUsers)
        })
    }, []);
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                users.map((user: IJsonPlaceholderUser) => <JsonPlaceholderUserComponent key={user.id} user={user} />)
            }
        </div>
    );
};