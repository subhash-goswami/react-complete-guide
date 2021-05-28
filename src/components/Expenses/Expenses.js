import React, { useState } from 'react'

import Card from "../UI/Card"
import ExpenseList from './ExpenseList'
import ExpensesFilter from "./ExpensesFilter"

import "./Expenses.css"
import ExpensesChart from './ExpensesChart'



const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020')
    const onChangeExpensesHendler = (filterDate) => {
        setFilterYear(filterDate);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    // Third Method
    // We cna save JSX code in variables
    // let expensesContent = <p>No Expense found. </p>



    return (
        <Card className="expenses" >
            <ExpensesFilter selected={filterYear} onChangeExpenses={onChangeExpensesHendler} />
            <ExpensesChart expenses={filteredExpenses}/>
            {
                /* To Print message if the filter is not match ot any year or cases, 
                            we can use conditional operator and in this case we can use tenery operator */
            } { /* contitions ? if_true : if_false */}

            {
                /* First method
                            {filteredExpenses.lenght === 0 ? <p>No Expense found. </p> : filteredExpenses.map((expense) => (
                                <ExpenseItem
                                    key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                                />))}
                            */
            }

            { /* Also we can use && operator to print message */} {
                /* Second method
                            {filteredExpenses.length === 0 && <p>No Expense found. </p>}
                            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                                <ExpenseItem
                                    key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                                />))}
                             */
            }
            { /* Third Method implimentation code in above */}
            { /* {expensesContent} */}
            <ExpenseList item={filteredExpenses}/>
        </Card>
    )
}

export default Expenses