import Card from '../UI/Card';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {

    return (
        <Card className="new-expense">
            <ExpenseFrom/>
        </Card>
    );
};

export default NewExpense;