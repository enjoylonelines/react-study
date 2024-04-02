import PostItem from "./PostItem";
import { useGetPostsQuery } from "../redux/api/posts";

function PostList() {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>oh no error...</p>}
      {posts && (
        <main>
          <p className="text-left mt-8 ml-4">n posts</p>
          <ul className="grid gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-[4rem]">
            {posts.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })}
          </ul>
        </main>
      )}
    </>
  );
}

export default PostList;
