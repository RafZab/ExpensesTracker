import './ExpenseForm.css';

const ExpanseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <diV className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Title"/>
                </diV>
                <diV className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" placeholder="Amount" step="0.01" min="0.01"/>
                </diV>
                <diV className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"/>
                </diV>
            </div>
                <diV className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </diV>
        </form>
    );
};

export default ExpanseForm;