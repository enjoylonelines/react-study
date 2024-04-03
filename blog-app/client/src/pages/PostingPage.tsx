function PostingPage() {
  return (
    <form className="mt-[10.5rem] items-center text-left mx-auto w-[48rem] ">
      <div>
        <input
          className="font-bold text-5xl bg-inherit"
          placeholder="제목을 입력하세요"
        ></input>
        <input
          className="mt-12 block bg-inherit text-lg"
          placeholder="태그를 입력하세요"
        ></input>
        <ul className="mt-4 flex">
          <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0ㄷㄷ.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
            2400만원
          </li>
        </ul>
      </div>
      <main className="mt-20">
        <input
          type="text"
          placeholder="당신의 이야기를 적어보세요..."
          className="text-lg bg-inherit"
        />
      </main>
    </form>
  );
}

export default PostingPage;
