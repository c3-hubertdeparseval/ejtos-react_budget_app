import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
      const value = parseInt(event.target.value);
      const max = parseInt(event.target.max);
      if (value > max) {
        alert(`The value cannot exceed ${max}`);
      } else if (value < totalExpenses) {
        alert(`The value cannot be less than total spending (£${totalExpenses})`);
      } else {
        setNewBudget(value);
      }
    }
    return (
  <div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} max={20000} onChange={handleBudgetChange}></input>
  </div>
    );
};
export default Budget;