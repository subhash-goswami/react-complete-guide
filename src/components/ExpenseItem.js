import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem(props) {
    // This is JavaScript Code
    
    return (
        // This code is represent as JavaScript XML code (JSX code)
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"><h2>{props.title}</h2></div>
            <div className="expense-item__price">{props.amount} cr</div>
        </div>
    )
}

export default ExpenseItem;