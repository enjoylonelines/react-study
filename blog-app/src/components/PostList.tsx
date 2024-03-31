import PostItem from "./PostItem";

function PostList() {
  return (
    <ul className="grid gap-8 place-items-center md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <PostItem key={idx} />
      ))}
    </ul>
  );
}

export default PostList;
