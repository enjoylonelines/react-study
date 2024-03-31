export interface PostType {
  post: PostItemType[];
}

export interface PostItemType {
  id: number;
  title: string;
  body: string;
  date: string;
  img: URL;
}
