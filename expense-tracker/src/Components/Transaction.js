import React, { useState ,useContext} from 'react'
import {GlobalContext} from '../Context/Global'

export default function Transaction() {
    const [text,setText] = useState("")
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
      e.preventDefault();
      const newTrans = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount
      }
      addTransaction(newTrans);
    }
  return (
    <div className='transaction'>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor='text'></label>
            <input type='text' placeholder='Name' value={text}  onChange = {(e) => setText(e.target.value)}/>
            <label htmlFor='amount'>negative - expense | positive - income</label>
            <input type='number' placeholder='cost'  value={amount}  onChange = {(e) => setAmount(e.target.value)}/>
            <input type='submit' placeholder='submit' />

        </form>
    </div>
  )
}
