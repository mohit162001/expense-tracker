
import { DUMMY_EXPENSES } from './component/Expenses/utility/expenses';
import { useState } from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  function handleExpenses(expenses){
      setExpenses((prevExp)=>{
        return [...prevExp,expenses]
      })
  }
  console.log(expenses)
  return (
    <div>
      <NewExpense addExpenses={handleExpenses}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
