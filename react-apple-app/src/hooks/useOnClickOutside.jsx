import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => { 
    const listener = (e) => {
      if(!ref.current || ref.current.contains(e.target)) // 모달창안에 있지 않거나? 모달창 안쪽을 눌렀다면 리턴
        return;
      else handler();
    }
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [ref, handler])
}