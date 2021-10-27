import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Aardappelen",
    amount: 5.00,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "Eieren", amount: 3.00, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Rijst",
    amount: 2.95,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Bier",
    amount: 4.00,
    date: new Date(2021, 5, 12),
  },
];

function App() {
const [expenses, setExpenses]=useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses]
  } )
 }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses} />
    
    </div>
  );
}

export default App;
