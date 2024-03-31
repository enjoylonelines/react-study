import { Link } from "react-router-dom";

function PostItem({ id }) {
  return (
    <li className="bg-stone-900 w-[20rem] h-[23.563rem] rounded-sm relative">
      <Link to={`/${id}`}>
        <img src="" alt="포스트 이미지" className="h-[10.4375rem]" />
        <div className="flex flex-col text-left p-[1rem]">
          <h2 className="text-xl font-bold ">포스트 제목</h2>
          <div>포스트 미리보기</div>
          <div className="absolute bottom-3 right-4">날짜, 댓글 수</div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
