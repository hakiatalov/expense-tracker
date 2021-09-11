import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {

    const [filter, setFilter] = useState('All');

    const filteredExpenses = props.items.filter(element =>{
        return filter == "All" ? true : element.date.getFullYear() == filter;
    })

    return ( 
        <div>
            <Card className="expenses">
                <ExpensesFilter filter={filter} setFilter={setFilter} />
                {filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            filter={filter} />
                    )
                })}
            </Card>
        </div>
    );
}

export default Expenses;