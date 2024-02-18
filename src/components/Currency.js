import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { dispatch } = useContext(AppContext);
    
    let currencyText = 'Text';
    switch (currency) {
        case '$':
            currencyText = 'Dollar';
            break;
        case '£':
            currencyText = 'Pound';
            break;
        case '€':
            currencyText = 'Euro';
            break;
        case '₹':
            currencyText = 'Ruppee';
            break;
        default:
            currencyText = '';
            break;
    }

//        console.log('Currency: ' + currency);
        
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    const handleCurrencyChange = (newCurrency) => {
        newCurrency = newCurrency[0];
        setCurrency(newCurrency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

        setDropdownOpen(false);
}

/*    return (
        <div className='alert alert-primary'>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputCurrencySelect">Currency (currency)</label>
            </div>
            <select className="custom-select" id="inputCurrencySelect" onChange={(event) => setCurrency(event.target.value)}>
                <option value="Dollar" name="dollar">Dollar</option>
                <option defaultValue value="Pound" name="pound"> Pound</option>
                <option value="Euro" name="euro">Euro</option>
                <option value="Ruppee" name="ruppee">Ruppee</option>
            </select>
        </div>
    );    
*/

    return (
        <div className='alert bg-success'>
            <div className={"dropdown" + (dropdownOpen ? " show" : "")}>
                <button 
                    className="btn btn-success dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded={dropdownOpen}
                    onClick={toggleDropdown}>
                    Currency ({currency} {currencyText})
                </button>
                <div className={"bg-success dropdown-menu" + (dropdownOpen ? " show" : "")} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#dollar" onClick={() => handleCurrencyChange('$ Dollar')}>$ Dollar</a>
                    <a className="dropdown-item" href="#pound" onClick={() => handleCurrencyChange('£ Pound')}>£ Pound</a>
                    <a className="dropdown-item" href="#euro" onClick={() => handleCurrencyChange('€ Euro')}>€ Euro</a>
                    <a className="dropdown-item" href="#ruppee" onClick={() => handleCurrencyChange('₹ Ruppee')}>₹ Ruppee</a>
                </div>
            </div>
        </div>
    );

};
export default Currency;
