
import './App.css';
import Balance from './Components/Balance';
import History from './Components/History';
import Header from './Components/Header';
import IncomeExpense from './Components/IncomeExpense';
import Transaction from './Components/Transaction';
import {GlobalProvider} from './Context/Global'

function App() {
  return (
    < div className='container'>
      <GlobalProvider>
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <History/>
          <Transaction/>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
 