import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'j1',
    title: 'Credit Card',
    amount: 134.16,
    date: new Date(2022, 1, 14),
  },
  {
    id: 'f1',
    title: 'Life Insurance',
    amount: 50.9,
    date: new Date(2022, 2, 14),
  },
  {
    id: 'm1',
    title: 'Rent',
    amount: 302.78,
    date: new Date(2022, 3, 14),
  },
  {
    id: 'a1',
    title: 'Home Security',
    amount: 200,
    date: new Date(2022, 4, 14),
  },
  {
    id: 'm1',
    title: 'Other',
    amount: 98.89,
    date: new Date(2022, 5, 14),
  },
  { id: 'e2', title: 'New TV', amount: 300.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
