import React, {useState} from 'react'

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

//This is arrow function syntax
const ExpenseItem = (props) => {
    // This is JavaScript Code
    const [title, setTitle] = useState(props.title)
    const clickMe = () =>{
        setTitle("Updated!!")
    }

    return (
        // This code is represent as JavaScript XML code (JSX code)
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"><h2>{title}</h2></div>
            <div className="expense-item__price">{props.amount} cr</div>
            <button onClick={clickMe}>Click me</button>
        </Card>
    )
}

export default ExpenseItem;