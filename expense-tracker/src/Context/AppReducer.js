    export default (state, action) => {        
        switch(action.type){
            case 'DELETE_TRANSACTION':
            return{
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.paylod)
            }
            case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction: [action.paylod,...state.transaction]
            }
            default:
                return state;
        }
    };