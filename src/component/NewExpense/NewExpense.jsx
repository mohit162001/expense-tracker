import React from 'react'
import './CSS/newexpense.css'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    const [userForm,setUserForm] = useState(false);

    function handleAddExpenses(expenses){
      const updatedExpenses = {
        ...expenses,
        id: Math.random()*10
      }
      props.addExpenses(updatedExpenses)
    }
    function formHandler(){
        setUserForm(!userForm);
    }
  return (
    <div className='new-expense'>
       {userForm ? <ExpenseForm onAddExpenses={handleAddExpenses} formHandler={formHandler}/>: <button onClick={formHandler}>Add Expense</button>}
    </div>
  )
}

export default NewExpense