export interface ITodoDummyJson {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodoDummyJsonResponse {
  todos: ITodoDummyJson[];
  total: number;
  skip: number;
  limit: number;
}