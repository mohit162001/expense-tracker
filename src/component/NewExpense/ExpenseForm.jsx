import React, { useState } from 'react'
import './CSS/expenseform.css'
function ExpenseForm({formHandler,onAddExpenses}) {

  const [userInput,setUserInput] = useState({
    title:undefined,
    amount:undefined,
    date: undefined
  })

  function handleSubmit(event){
    event.preventDefault();
    const userDate = new FormData(event.target)
    const data = {
      title: userDate.get('title'),
      amount: userDate.get('amount'),
      date: new Date (userDate.get('date'))
    }
    
    onAddExpenses(data)
    setUserInput({
      title:undefined,
      amount:undefined,
      date: undefined
    })

    setTimeout(()=>{
      formHandler()
    },200)

  }
  console.log(userInput)
  return (
    <form className='new-expense__control' onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" id="title" required  />
        <label>Amount</label>
        <input type="number" name="amount" id="amount" required  />
        <label>Date</label>
        <input type="date" name="date"  id="date" min={"2020-02-08"} max={"2024-02-08"} required  />
        <div className="new-expense__actions">
            <button className='cancle-btn' type='button' onClick={formHandler}>Cancle</button>
            <button type='submit'>Add expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm