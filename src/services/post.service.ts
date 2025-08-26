import type {IPost} from "../models/IPost.ts";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch(postsUrl).
    then(response => response.json())
}
