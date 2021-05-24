import React,  {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // For now we are using this
    const [inputTitle, setInputTitle] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')
    
    // Insate of using multiple useState we can use only one userState like
    // If we want ot user multiple state
    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     setInputDate: ''
    // })

    const titleChangeHandler = (event) => {
        // If state is depend on pervious state then use this but in some case it is not work
        // setUserInput({
        //     ...userInput,
        //     inputTitle:event.target.value
        // })

        // If state is depend on pervious state then use this 
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         inputTitle: event.target.value
        //     }
        // })

        //Now We using this
        setInputTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     inputAmount:event.target.value
        // })
        setInputAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     setInputDate:event.target.value
        // })
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();  // The preventDefault() method cancels the event if it is cancelable

        const expenseDate = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        setInputTitle('');
        setInputAmount('');
        setInputDate('');

        props.onSaveExpenseData(expenseDate);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={inputDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;