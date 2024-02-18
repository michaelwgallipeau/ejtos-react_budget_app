import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget value cannot exceed £20000");
        } else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending");
        } else {
            setNewBudget(event.target.value);
        }
    }
//    <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
