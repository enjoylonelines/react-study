import { useState } from "react";

let test1 = 10;

export default function Test() {
  const [useValue, setUseValue] = useState(10);
  console.log(test1);
  return (
    <div style={{width: '10rem', height:'10rem', display: 'flex', alignItems:'center'}}>
      <div>{useValue}</div>
      <button onClick={() => { test1 = test1 + 1 }}>전역변수 + 1</button>
      <button onClick={() => setUseValue(useValue => useValue + 1)}>상태 업데이트</button>
    </div>
  )
}