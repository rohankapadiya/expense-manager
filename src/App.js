import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Utility Bills",
    amount: 194.12,
    date: new Date(2023, 1, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Health Insurance",
    amount: 750,
    date: new Date(2023, 8, 5),
  },
  {
    id: "e6",
    title: "Subscriptions",
    amount: 55,
    date: new Date(2023, 3, 22),
  },
  {
    id: "e7",
    title: "Pet Food and Care",
    amount: 450,
    date: new Date(2022, 6, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div className="main_title">
        <h2>Expense manager by Rohan!!</h2>
      </div>
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
