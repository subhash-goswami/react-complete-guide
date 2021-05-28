import React from 'react'

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

//This is arrow function syntax
const ExpenseItem = (props) => {
    // This is JavaScript Code
    return (
        <li>
                {/* This code is represent as JavaScript XML code (JSX code) */}
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description"><h2>{props.title}</h2></div>
                <div className="expense-item__price">{props.amount} cr</div>
            </Card>
        </li>
    )
}

export default ExpenseItem;