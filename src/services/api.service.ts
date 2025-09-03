import type {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/IPost.ts";
import type {ICart} from "../models/ICart.ts";

export const services = {
    getUsers: async (): Promise<IUser[]> => {
        const response = await fetch(urls.getUsers)
            .then((res) => res.json());

        return response.users
    },
    getPosts: async (): Promise<IPost[]> => {
        const response = await fetch(urls.getPosts)
            .then((res) => res.json());

        return response.posts;
    },
    getCartsByUserId: async (userId: number): Promise<ICart[]> => {
        const response = await fetch(urls.getCartsByUserId(userId))
            .then((res) => res.json());

        return response.carts;
    }
};