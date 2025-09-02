interface IUser {
  id: number;
  username: string;
  fullName: string;
}

export interface IDummyJsonComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUser;
}

export interface IDummyJsonCommentsResponse {
  comments: IDummyJsonComment[];
  total: number;
  skip: number;
  limit: number;
}