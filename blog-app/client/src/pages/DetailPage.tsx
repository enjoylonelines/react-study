import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  return (
    <div className="mt-[10.5rem] text-left mx-[31.5625rem]">
      <div>
        <h1 className="font-bold text-5xl ">title</h1>
        <div className="mt-12">날짜</div>
        <ul className="mt-4 flex">
          <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
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
        src=""
        alt="main img 조건부"
        className="mt-8 object-contain h-auto w-auto "
      />
      <main className="mt-20">본문</main>
    </div>
  );
}

export default DetailPage;
