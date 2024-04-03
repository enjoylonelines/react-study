import { Link } from "react-router-dom";

function PostItem({ post }) {
  const { id, title, body, date, img } = post;

  return (
    <li
      className="bg-stone-900 w-[20rem] h-[23.563rem] rounded-md relative"
      id="card"
    >
      <Link to={`/${id}`}>
        <img
          src={img}
          alt="포스트 이미지"
          className="h-[10.4375rem] rounded-t-md object-cover w-full"
        />
        <div className="flex flex-col text-left p-[1rem]">
          <h2 className="text-xl font-bold ">{title}</h2>
          {/* 포매팅필요 */}
          <div className="mt-2">{body}</div>
          <div className="absolute bottom-3 right-4">{date}</div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
