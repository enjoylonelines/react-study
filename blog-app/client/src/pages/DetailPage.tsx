import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/api/posts";
import { PostType } from "../types/post.type";

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
            <h1 className="font-bold text-5xl">{data.title}</h1>
            <div className="mt-12">{data.date}</div>
            <ul className="mt-4 flex">
              <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0ㄷㄷ.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
                2400만원
              </li>
              <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
                2400만원
              </li>
              <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
                2400만원
              </li>
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
