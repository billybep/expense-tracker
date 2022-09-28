import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (entederExpenseData) => {
    const expenseData = {
      ...entederExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      {/* Get value from expense form from onSaveExpenseDate */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
