import { Link } from "react-router-dom";
import Button from "../components/Button";
import Tag from "../components/Tag";
import { FaRegImage } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { queryClient, setPost } from "../api/http";

function PostingPage() {
  const { mutate, error } = useMutation({
    mutationFn: setPost,
    onMutate: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    mutate(data);
  }

  return (
    <form
      className="mt-[10.5rem] items-center text-left mx-auto w-[48rem]"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title" />
        <input
          className="font-bold text-5xl bg-inherit w-full"
          placeholder="제목을 입력하세요"
          name="title"
          defaultValue=""
        ></input>
        {/* <label htmlFor="tags" /> */}
        <input
          className="mt-12 block bg-inherit text-lg w-full"
          placeholder="태그를 입력하세요"
        ></input>
        <ul className="mt-4 flex">
          <Tag>2400만원</Tag>
        </ul>
        {/* 이미지 파일 피커 */}
        <FaRegImage className="m-2 my-6 text-2xl hover:text-slate-400 " />
      </div>

      <main className="mt-20">
        <label htmlFor="body"></label>
        <textarea
          placeholder="당신의 이야기를 적어보세요..."
          className="text-lg bg-inherit w-full overflow-y-hidden "
          name="body"
          defaultValue=""
        />
      </main>
      <footer className="w-[48rem] h-[3rem] flex justify-between fixed bottom-0 m-4">
        <Button>
          <Link to={"../"}>나가기</Link>
        </Button>
        <Button type="submit">출간하기</Button>
      </footer>
    </form>
  );
}

export default PostingPage;
