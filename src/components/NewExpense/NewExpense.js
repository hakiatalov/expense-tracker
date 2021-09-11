import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  
  const [displayForm, setDisplayForm] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const displayFormHandler = () => {
    setDisplayForm(true);
  } 

  return (
    <div className="new-expense">
      {!displayForm && <button onClick={displayFormHandler}>Add New Expense</button>}
      {displayForm && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} setDisplayForm={setDisplayForm} />}
    </div>
  );
}

export default NewExpense;