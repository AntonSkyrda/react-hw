export interface IUser {
  id: number;
  username: string;
  fullName: string;
}

export interface ICommentsDummyJson {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUser;
}

export interface  ICommentDummyJsonResponse {
  comments: ICommentsDummyJson[];
  total: number;
  skip: number;
  limit: number;
}