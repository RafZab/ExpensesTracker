import Card from '../UI/Card';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveNewExpenseDateHandler = (enteredExpense) => {
        const newExpense = {
            ...enteredExpense,
            id: Math.random(),
        };
        props.onAddNewExpense(newExpense);
    };

    return (
        <Card className="new-expense">
            <ExpenseFrom onSaveNewExpense={saveNewExpenseDateHandler} />
        </Card>
    );
};

export default NewExpense;