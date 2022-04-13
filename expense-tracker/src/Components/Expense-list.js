import React,{useContext} from 'react'
import {GlobalContext} from '../Context/Global'


export default function Expenselist() {
const {transaction, deleteTransaction} = useContext(GlobalContext);

  return (
    <>
      {transaction.map(element => (
        
        <div className='histroy' key={element.id} style={{color: element.amount>0?'green': 'red'}}>
          <div className='item-name' >
            {element.text}
        </div>
        <div className='item-cost'>
          
            <span>{element.amount}</span>
        </div> 
        <button onClick={() => deleteTransaction(element.id)} className='delete-button'>x</button>
      </div>
        
      ))}
       
    </>
  )
}
