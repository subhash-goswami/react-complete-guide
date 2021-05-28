import React, {useState} from 'react'

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insurence",
    amount: 1.25,
    date: new Date(2020, 4, 12)
  },
  {
    id: "e2",
    title: "Home Loan",
    amount: 10.25,
    date: new Date(2021, 1, 11)
  },
  {
    id: "e3",
    title: "Shop Expense",
    amount: 0.05,
    date: new Date(2021, 3, 10)
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 1.25,
    date: new Date(2021, 10, 12)
  }
]

const App = () => {
  
  const [expenses , setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      {/* here we can also write </ExpenseItem> */}
    </div>
  );
}

export default App;
