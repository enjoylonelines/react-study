import React from 'react'
import './ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{expense.charge}</span>
                <span className='amount'>{expense.amount}</span>
            </div>
            <div>
                <button 
                    className='edit-btn'
                    onClick={() => handleEdit(expense.index)}
                >
                    <MdEdit />
                </button>
                <button
                    className='clear-btn'
                    onClick={() => handleDelete(expense.index)}
                >
                  <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;