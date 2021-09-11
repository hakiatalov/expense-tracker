import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {

    const [filter, setFilter] = useState('All');

    const filteredExpenses = props.items.filter(element =>{
        return filter === "All" ? true : element.date.getFullYear().toString() === filter;
    })

    return ( 
        <div>
            <Card className="expenses">
                <ExpensesFilter filter={filter} setFilter={setFilter} />
                <ExpensesList items={filteredExpenses} /> 
            </Card>
        </div>
    );
}

export default Expenses;