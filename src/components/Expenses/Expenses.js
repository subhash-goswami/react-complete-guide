import React, {useState} from 'react' 

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"


const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020') 
    const onChangeExpensesHendler = (filterData) => {
        setFilterYear(filterData)
        console.log("Expenses.js")
        console.log(filterData);
    }
    return (
        <Card className="expenses">.
            <ExpensesFilter selected={filterYear} onChangeExpenses={onChangeExpensesHendler} />
            <ExpenseItem
                title={props.expense[0].title}
                amount={props.expense[0].amount}
                 date={props.expense[0].date} />

            <ExpenseItem
                title={props.expense[1].title}
                amount={props.expense[1].amount}
                date={props.expense[1].date} />

            <ExpenseItem
                title={props.expense[2].title}
                amount={props.expense[2].amount}
                date={props.expense[2].date} />
            <ExpenseItem
                title={props.expense[3].title}
                amount={props.expense[3].amount}
                date={props.expense[3].date} />
        </Card>
    )
}

export default Expenses