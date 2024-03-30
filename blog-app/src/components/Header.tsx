function Header() {
  return (
    <header className="h-[5.5rem] w-full bg-stone-500 fixed flex text-xl">
      <div className="flex justify-between px-8 w-full">
        <div className="content-center">{"<BeomLog/>"}</div>
        <div className="content-center">
          <input
            type="text"
            placeholder="검색하세요"
            className="mr-2 rounded-md"
          />
          <button className="">검색</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
