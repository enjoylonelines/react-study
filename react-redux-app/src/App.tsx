import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const [todoValue, setTodoValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value);
  }
  function addTodo(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue });
    setTodoValue('');
  }

  return (
    <div className="App">
      Clicked: {counter} time
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ol>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ol>
      <form onSubmit={addTodo} >
        <input type='text' value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
