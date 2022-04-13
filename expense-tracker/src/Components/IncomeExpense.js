import React, {useContext} from 'react'
import {GlobalContext} from '../Context/Global'


export default function IncomeExpense() {
  const {transaction} = useContext(GlobalContext);
  const amount = transaction.map(transaction => transaction.amount)
  const income = (amount.filter(item => item > 0)
  .reduce((acc,item) => (acc +=item), 0)).toFixed(2);

  const expense = (amount.filter(item => item < 0)
  .reduce((acc,item) => (acc +=item), 0)*-1).toFixed(2);
  return (
    <div className='income-expense'>
        <div className='income'>
            <h3>Income</h3>
            <span>PKR {income}</span>
        </div>
        <div className='expense'>
            <h3>Expense</h3>
            <p>PKR {expense}</p>
        </div>
    </div>
  )
}
