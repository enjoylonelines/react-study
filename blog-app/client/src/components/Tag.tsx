import React from "react";

function Tag({ children }) {
  return (
    <li className="h-[2rem] px-4 mr-[0.875rem] mb-[0ㄷㄷ.875rem] bg-stone-700 text-violet-500 rounded-xl inline-flex items-center">
      {children}
    </li>
  );
}

export default Tag;
