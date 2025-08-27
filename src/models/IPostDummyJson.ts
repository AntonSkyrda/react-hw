export interface IReactions {
  likes: number;
  dislikes: number;
}

export interface IPostsDummyJson {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}

export interface IPostsDummyJsonResponse {
  posts: IPostsDummyJson[];
  total: number;
  skip: number;
  limit: number;
}