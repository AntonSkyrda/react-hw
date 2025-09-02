import {useEffect, useState} from "react";
import {dummyJsonService} from "../../service/api.service.ts";
import type {IDummyJsonUser} from "../../models/IDummyJsonUser.ts";
import {DummyJsonUserComponent} from "../dummy-json-user-component/DummyJsonUserComponent.tsx";


export const DummyJsonUsersComponent = () => {
    const [users, setUsers] = useState<IDummyJsonUser[]>([])

    useEffect(() => {
        dummyJsonService.userService.getAllUsers().then(allUsers => {
            setUsers(allUsers)
        })
    }, []);


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                users.map((user: IDummyJsonUser) =>  <DummyJsonUserComponent key={user.id} user={user} />)
            }
        </div>
    )
};