import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {usersService} from "../../services/api.services.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {itemsPerPage} from "../../constants/constants.ts";

export const UsersComponent = () => {
    const [query] = useSearchParams()
    const [users, setUsers] = useState<IUser[]>([])
    const currentSkip = Number(query.get("page")) * itemsPerPage;
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {

        usersService.getAllUsers(currentSkip.toString()!).then((response) => {
            setUsers(response.users);
            setTotal(response.total);
        })
    }, [currentSkip])
    return (
        <div className="flex gap-4 flex-col items-center ">
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
            <PaginationComponent total={total}/>
        </div>
    );
};