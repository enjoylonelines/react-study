import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-[5.5rem] fixed flex text-xl w-full z-10 top-0">
      <div className="flex justify-between px-8 mx-[21.125rem] w-full">
        <Link to={"/"} className="content-center">
          {"<BeomLog/>"}
        </Link>
        <div className="content-center">
          <input
            type="text"
            placeholder="검색하세요"
            className="mr-2 rounded-md p-1"
          />
          <button className="">검색</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
