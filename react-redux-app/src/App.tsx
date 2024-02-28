import React, { useState } from 'react';
import './App.css';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value);
  }
  function addTodo(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodoValue('');
  }
  
  return (
    <div className="App">
      {/* Clicked: {value} time */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <form onSubmit={addTodo} >
        <input type='text' value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
