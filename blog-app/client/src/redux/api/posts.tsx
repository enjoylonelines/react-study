import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // /react
import { PostType } from "../../types/post.type";
export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555/" }),
  endpoints: (builder) => ({
    getPost: builder.query<PostType, void>({
      query: () => `posts`,
    }),
  }),
});

export const postsState = (state) => state.postsApi;
export const { useGetPostQuery } = postsApi;
