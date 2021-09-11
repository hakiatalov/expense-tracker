import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  
  const [values, setValues] = useState({
    title: "",
    amount: "",
    date: ""
  });
  
  const handleInputChange = (event) => {
    setValues((prevState) => {
      return ({
        ...prevState, 
        [event.target.name]: event.target.value
      });
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: values.title,
      amount: values.amount, 
      date: new Date(values.date)
    };

    props.onSaveExpenseData(expenseData);
    props.setDisplayForm(false);

    setValues({
      title: '',
      amount: '',
      date: ''
    });
  }

  const cancelFormHandler = () => {
    props.setDisplayForm(false);
    setValues({
      title: '',
      amount: '',
      date: ''
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input 
              onChange={handleInputChange}
              type="text"
              name="title"
              value={values.title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={handleInputChange}
              type="number"
              min="0.01"
              step="0.01"
              name="amount"
              value={values.amount} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={handleInputChange}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name="date"
              value={values.date} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default NewExpenseForm;