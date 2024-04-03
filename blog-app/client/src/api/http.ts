import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

const customAxios = axios.create({
  baseURL: `http://localhost:5555`,
});

export const getPosts = async () => {
  try {
    const response = await customAxios.get(`/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const setPost = async (data) => {
  try {
    return await customAxios.post("/posts", data);
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id) => {
  try {
    return await customAxios.delete(`posts/${id}`);
  } catch (error) {
    console.error(error);
  }
};
