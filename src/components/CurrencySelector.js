import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencySelector.css'; // Import the CSS file

const CurrencySelector = () => {
  const { selectedCurrency, dispatch } = useContext(AppContext);

    const changeCurrency = (event) =>{
      dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
      })
    }

  return (
    <div className='currency-selector'>
      <label>Currency: </label>
      <select value={selectedCurrency} onChange={changeCurrency}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
