import React, {useContext} from 'react'
import {GlobalContext} from '../Context/Global'

export default function Balance() {
  const {transaction} = useContext(GlobalContext);
  const amount = transaction.map(transaction => transaction.amount)
  const total =  (amount.reduce((acc,item) => (acc +=item), 0)).toFixed(2);
  return (
    <div className='balance'>
        Your Balance
        <h5>PKR {total}</h5>
    </div>
  )
}
