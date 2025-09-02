import type {IDummyJsonUser} from "../models/IDummyJsonUser.ts";
import {urls} from "../constants/urls.ts";
import type {IJsonPlaceholderUser} from "../models/IJsonPlaceholderUser.ts";
import type {IDummyJsonPost} from "../models/IDummyJsonPosts.ts";
import type {IDummyJsonComment} from "../models/IDummyJsonComment.ts";

export const dummyJsonService = {
    userService: {
        getAllUsers: async (): Promise<IDummyJsonUser[]> => {
            const response = await fetch(urls.dummyJson.getUsers)
                .then(res => res.json())

            return response.users;
        }
    },
    postService: {
        getAllPosts: async (): Promise<IDummyJsonPost[]> => {
            const response = await fetch(urls.dummyJson.getPosts)
                .then(res => res.json())

            return response.posts;
        }
    },
    commentService: {
        getAllComments: async (): Promise<IDummyJsonComment[]> => {
            const response = await fetch(urls.dummyJson.getComments)
                .then(res => res.json())
            return response.comments;
        }
    }
};

export const jsonPlaceholderService = {
    userService: {
        getAllUsers: async (): Promise<IJsonPlaceholderUser[]> => {
            return await fetch(urls.jsonPlaceholder.getUsers)
                .then(res => res.json())
        }
    },
    postService: {
        getAllPosts: async (): Promise<IDummyJsonPost[]> => {
            return await fetch(urls.jsonPlaceholder.getPosts)
                .then(res => res.json())
        }
    }
};
