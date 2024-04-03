import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/api/posts";
import { PostType } from "../types/post.type";
import Tag from "../components/Tag";
import Button from "../components/Button";

function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostQuery(id);

  return (
    <>
      {isLoading && "is loading,,,"}
      {error && <p>oh no error</p>}
      {data && (
        <div className="mt-[10.5rem] items-center text-left mx-auto w-[48rem] ">
          <div>
            <h1 className="font-bold text-5xl mb-10">{data.title}</h1>
            <div className="flex items-center justify-between">
              <div>{data.date}</div>
              <div>
                <Button>수정</Button>
                <Button>삭제</Button>
              </div>
            </div>
            <ul className="mt-4 flex">
              <Tag>2400만원</Tag>
            </ul>
          </div>
          <img
            src={data.img}
            alt="main img 조건부"
            className="mt-8 object-contain h-auto w-auto "
          />
          <main className="mt-20">{data.body}</main>
        </div>
      )}
    </>
  );
}

export default DetailPage;
