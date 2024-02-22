import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value); 
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay)

    return () => { // useEffect hook에서 반환된 고차함수는 '재랜더링' 시에 호출됨 << '재랜더링': value, delay 값이 바뀌었을 때
      clearTimeout(handler);
    }
  }, [value, delay] )

  return debounceValue;
}