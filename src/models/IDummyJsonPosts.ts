interface Reactions {
  likes: number;
  dislikes: number;
}

export interface IDummyJsonPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface IDummyJsonPostsResponse {
  posts: IDummyJsonPost[];
  total: number;
  skip: number;
  limit: number;
}