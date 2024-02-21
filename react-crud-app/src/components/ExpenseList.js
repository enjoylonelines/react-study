import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import { Droppable, Draggable } from "react-beautiful-dnd";


const ExpenseList = ({ expenses, handleClear, initialExpenses, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className='list'>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {initialExpenses.map((item, index) => {
                return (
                  <Draggable
                    key={`item${item.index}`}
                    draggableId={`item-${item.index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ExpenseItem
                          key={item.index}
                          expense={item}
                          handleDelete={handleDelete}
                          handleEdit={handleEdit}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}

              <div />
            </div>
          )}
        </Droppable>
      </ul>
      {expenses.length > 0 ?
        <button className='btn' onClick={handleClear} >
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
        : null
      }
    </>
  )
}
export default ExpenseList;
