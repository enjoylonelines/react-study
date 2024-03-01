import { useState } from 'react'
import './App.css'
import OperationButton from './components/OperationButton';
import UserInput from './components/UserInput';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleCount(ops) {
    setCount(prev => {
      switch(ops) {
        case '+': 
          return prev + input;
        case '-': 
          return prev - input;
        case 'x': 
          return prev * input;
        case '/': 
          return prev === 0? 0 : prev / input;
        default:
          return prev + input;
      }
    })
  }

  function handleReset() {
    setInput('');
    setCount(0);
  }
 
  return (
    <>
      <UserInput input={input} setInput={setInput} handleReset={handleReset}/>

      <OperationButton handleCount={handleCount} ops={'+'}/>
      <OperationButton handleCount={handleCount} ops={'-'}/>
      <OperationButton handleCount={handleCount} ops={'x'}/>
      <OperationButton handleCount={handleCount} ops={'/'}/>

      {input === '' && <p className='count'>Please enter a input</p>}
      {input !== '' && <p className='count'>{count}</p>}
    </>
  )
}

export default App
