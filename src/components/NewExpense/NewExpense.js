import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import AddNewExpense from "./AddNewExpense";
function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    let display = "";
    function saveExpenseDataHandler(enteredExpenseData){

        const expenseData = {
            id:Math.random().toString(),
            ...enteredExpenseData
        }
        props.onSaveExpense(expenseData);
    }
    if(isEditing){
        display = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} editing={setIsEditing}/>;
    }else{
        display = <AddNewExpense editing={setIsEditing}/>
    }
    return (
            <div className='new-expense'>
            {display}
        </div>
    );
}
export default NewExpense;