import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // /react
import { PostType } from "../../types/post.type";
export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => `posts`,
    }),
    getPost: builder.query<PostType, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const postsState = (state) => state.postsApi;
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
