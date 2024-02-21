import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App2 = () => {
  const items = [
    { index: 1, charge: '책', amount: 20000 },
    { index: 2, charge: '빵', amount: 1000 },
    { index: 3, charge: '맥북', amount: 2000000 },
  ];
  const [expenses, setExpenses] = useState([]);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState('');

  useEffect(() => {
    setExpenses(items);
  }, []);

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    setExpenses((items) =>
      reorder(items, result.source.index, result.destination.index)
    );
  };
  const handleClear = () => {
    setExpenses([]);
  }
  const handleEdit = (index) => {
    const expense = expenses.find((item) => item.index === index);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setIndex(index);
    setEdit(true);

  }
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 5000);
  }
  const handleCharge = (e) => {
    setCharge(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }
  const handleDelete = (index) => {
    const newExpenses = expenses.filter(expense => expense.index !== index);
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map(item => {
          return item.index === index ? { ...item, charge, amount } : item;
        })
        setExpenses(newExpenses);
        setEdit(false); // 제출로 바뀜
        handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' });
      }
      else {
        const newExpense = { index: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
      }
      setCharge('');
      setAmount(0);
    }
    else handleAlert({ type: 'danger', text: 'charge는 빈 칸일 수 없으며, amount 값은 0보다 커야 합니다.' });
  }
  return (
    <>
      <h1>장바구니</h1>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}

      {expenses && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense Form */}
            <ExpenseForm
              charge={charge}
              handleCharge={handleCharge}
              amount={amount}
              handleAmount={handleAmount}
              handleSubmit={handleSubmit}
              edit={edit}
            />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense List */}
            <ExpenseList
              expenses={expenses}
              initialExpenses={expenses}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleClear={handleClear}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>
              총합계: <span>{expenses.reduce((acc, cur) => acc += cur.amount, 0)}</span>
            </p>
          </div>
        </DragDropContext>
      )}
    </>
  );
};


export default App2

