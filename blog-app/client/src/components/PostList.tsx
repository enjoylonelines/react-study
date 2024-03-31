import PostItem from "./PostItem";
import { useGetPostQuery } from "../redux/api/posts";

function PostList() {
  const { data: posts, isLoading, error } = useGetPostQuery();

  console.log(posts);
  return (
    <>
      {isLoading && <p>isLoading...</p>}
      {error && <p>oh no error...</p>}
      {posts && (
        <main>
          <p className="text-left mt-8 ml-4">n posts</p>
          <ul className="grid gap-8 place-items-center lg:grid-cols-2 xl:grid-cols-3 pt-[4rem]">
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
