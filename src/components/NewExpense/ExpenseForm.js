import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  const today = new Date();
  let currentDate = today.toJSON()

  function inputChangeHandler(identifier, value){
    if (identifier === 'title'){
      setEnteredTitle(value);
    }else if(identifier === 'amount'){
      setEnteredAmount(value);
    }else{
      setEnteredDate(value);
    }
  }

  function submitHandler(e){
    e.preventDefault();

    const dateParts = enteredDate.split('-');
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  date.setHours(0, 0, 0, 0);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(date)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  function handleCancel(e){
    props.editing(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={(event) => { inputChangeHandler('title',event.target.value)}} required/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={(event) => { inputChangeHandler('amount',event.target.value)}} required/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2020-01-01' max={currentDate.slice(0,10)} value={enteredDate} onChange={(event) => { inputChangeHandler('date',event.target.value)}} required/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={handleCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;