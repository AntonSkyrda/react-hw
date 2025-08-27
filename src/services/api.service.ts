import type {ITodo} from "../models/ITodo.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";
import type {ITodoDummyJson, ITodoDummyJsonResponse} from "../models/ITodoDummyJson.ts";
import type {IPostsDummyJson, IPostsDummyJsonResponse} from "../models/IPostDummyJson.ts";
import type {ICommentDummyJsonResponse, ICommentsDummyJson} from "../models/ICommentDummyJson.ts";

const baseJsonplaceholderUrl = import.meta.env.VITE_API_JSONPLACEHOLDER_URL;
const baseDummyjsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;

const todosUrl = `${baseJsonplaceholderUrl}todos`;
const commentsUrl = `${baseJsonplaceholderUrl}comments`;
const postsUrl = `${baseJsonplaceholderUrl}posts`;

const todosDjsonUrl = `${baseDummyjsonUrl}todos/?limit=0`;
const commentsDjsonUrl = `${baseDummyjsonUrl}comments/?limit=0`;
const postsDjsonUrl = `${baseDummyjsonUrl}posts/?limit=0`;

export const getAllTodos = async (): Promise<ITodo[]> => {
    return await fetch(todosUrl).then(response => response.json())
}

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch(postsUrl).then(response => response.json())
}

export const getAllComments = async (): Promise<IComment[]> => {
    return await fetch(commentsUrl).then(response => response.json())
}

export const getAllTodosDummyJson = async (): Promise<ITodoDummyJson[]> => {
    const response: ITodoDummyJsonResponse = await fetch(todosDjsonUrl).then(response => response.json())

    return response.todos;
}

export const getAllPostsDummyJson = async (): Promise<IPostsDummyJson[]> => {
    const response: IPostsDummyJsonResponse = await fetch(postsDjsonUrl).then(response => response.json())

    return response.posts
}

export const getAllCommentsDummyJson = async (): Promise<ICommentsDummyJson[]> => {
    const response: ICommentDummyJsonResponse = await fetch(commentsDjsonUrl).then(response => response.json())

    return response.comments
}