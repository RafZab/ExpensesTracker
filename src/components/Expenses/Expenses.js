import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const fileredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeYear={filterChangeHandler} />
                <ExpensesList items={fileredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;