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
                <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                    filter={filter} />

                <ExpenseItem 
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                    filter={filter} />

                <ExpenseItem 
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                    filter={filter} />

                <ExpenseItem 
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                    filter={filter} />
            </Card>
        </div>
    );
}

export default Expenses;