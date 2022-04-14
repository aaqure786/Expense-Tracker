import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// inital State
const initialState ={
    transaction: [
        
    ]
}

//Global Context

export const GlobalContext = createContext(initialState);

// Provider

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION', 
            paylod: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION', 
            paylod: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}