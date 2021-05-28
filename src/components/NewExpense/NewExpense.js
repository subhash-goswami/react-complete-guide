import React, {useState} from  'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (inputExpenseData) =>{
        const expenseData = {
            id: Math.random().toString(),
            ...inputExpenseData
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const startEditngHandler = () => {
        setIsEditing(true)
    }
    const stopEditngHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditngHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditngHandler}/>}
        </div>
    );
}

export default NewExpense;