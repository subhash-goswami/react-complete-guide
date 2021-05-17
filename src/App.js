import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: 1.25,
      date: new Date(2021, 4, 12)
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
  return (
    <div className="App">
      <Expenses expense={expense}/>
      {/* here we can also write </ExpenseItem> */}
    </div>
  );
}

export default App;
