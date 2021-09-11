import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {

    const [filter, setFilter] = useState('2021');
    console.log(filter);

    return ( 
        <div>
            <Card className="expenses">
                <ExpensesFilter filter={filter} setFilter={setFilter} />
                {props.items.map((expense) => {
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