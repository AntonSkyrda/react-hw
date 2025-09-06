import type {IUserResponse} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const usersService = {
    getAllUsers: async (skip: string): Promise<IUserResponse> => {
        if (!skip) {
            skip = "0"
        }
        return await fetch(urls.usersUrl(skip))
            .then(res => res.json())
    }
}