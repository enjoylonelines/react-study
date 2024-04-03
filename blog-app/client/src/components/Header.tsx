import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="h-[5.5rem] fixed flex text-xl w-full z-10 top-0">
      <div className="flex justify-between px-8 mx-[21.125rem] w-full">
        <Link
          to={"/"}
          className="content-center font-extrabold text-violet-800 text-3xl hover:text-violet-600"
        >
          {"<BeomLog/>"}
        </Link>
        <div className="content-center">
          <input
            type="text"
            placeholder="검색하세요"
            className="mr-2 rounded-md p-1"
          />
          <Button>검색</Button>
          <Button>
            <Link to={"/post"}>새 글 작성</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
