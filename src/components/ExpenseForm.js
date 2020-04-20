import React from 'react';
import {MdSend} from 'react-icons/md';

export const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" className="form-control" name="charge" 
                    id="charge" placeholder="e.g rent" value={charge} onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" className="form-control" name="amount" 
                    id="amount" placeholder="100" value={amount} onChange={handleAmount}/>
                </div>
            </div>
            <button type="submit" className="btn">{edit?'edit' : 'submit'} <MdSend className="btn-icom" /></button>
        </form>
    )
}
