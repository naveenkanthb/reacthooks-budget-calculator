import React from 'react';
import {MdDelete} from 'react-icons/md'
import { ExpenseItem } from './ExpenseItem';

export const ExpenseList = ({expenses,clearItems}) => {
    return (
        <React.Fragment>
            <ul className="list">
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id} expense={expense} />
                })}
            </ul>
            {expenses.length > 0 && <button className="btn" onClick={clearItems}> Clear Items <MdDelete className="btn-icon"/></button>}
        </React.Fragment>
    )
}
