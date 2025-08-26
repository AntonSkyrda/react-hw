import type {IComment} from "../models/IComment.ts";

const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

export const getAllComments = async (): Promise<IComment[]> => {
    return await fetch(commentsUrl).
    then(response => response.json())
}
