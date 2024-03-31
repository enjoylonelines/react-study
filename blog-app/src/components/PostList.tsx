import PostItem from "./PostItem";

function PostList() {
  return (
    <main>
      <p className="text-left mt-8 ml-4">n posts</p>
      <ul className="grid gap-8 place-items-center lg:grid-cols-2 xl:grid-cols-3 pt-[4rem]">
        {[1, 2, 3, 4, 5].map((item, idx) => (
          <PostItem key={idx} id={idx} />
        ))}
      </ul>
    </main>
  );
}

export default PostList;
