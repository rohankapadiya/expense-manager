import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import React, { useState } from 'react';
import Card  from "../UI/Card";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2023');

  let filteredData = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  })

  

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear}
          onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredData}/>
          <ExpenseList filteredList={filteredData}/>
        </Card>
        </div>
    )
}

export default Expenses;
