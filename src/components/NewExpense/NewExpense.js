import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveNewExpenseDateHandler = (enteredExpense) => {
        const newExpense = {
            ...enteredExpense,
            id: Math.random(),
        };
        props.onAddNewExpense(newExpense);
        ChangeEditingHandler();
    };

    const ChangeEditingHandler = () => {
        setIsEditing((prevState) => !prevState);
    };


    const newExpensesContext = isEditing ?
        <ExpenseFrom onCancel={ChangeEditingHandler} onSaveNewExpense={saveNewExpenseDateHandler} />
        :
        <button onClick={ChangeEditingHandler}>Add New Expense</button>

    return (
        <Card className="new-expense">
            {newExpensesContext}
        </Card>
    );
};

export default NewExpense;