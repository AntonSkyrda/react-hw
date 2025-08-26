import type {IPost} from "../models/IPost.ts";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch(baseUrl).
    then(response => response.json())
}
