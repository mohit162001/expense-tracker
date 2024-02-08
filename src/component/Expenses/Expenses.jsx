import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './CSS/expenses.css'
import Card from '../UI/Card'
import ExpensesFIlter from './ExpensesFIlter.jsx'
function Expenses({expenses}) {
  const [filteredYear,setFilteredYear] = useState();
  function filterChangeHandler(year){
    setFilteredYear(year)
  }

  const filterByYear = expenses.filter((exp)=>{
    return exp.date.getFullYear() === Number(filteredYear)
  })
  console.log(expenses[0]);
  
  return (
    <>
    <Card className="expenses">
    <ExpensesFIlter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {filterByYear.length === 0 ? <p className='message'>No Data found</p>:filterByYear.map((exp)=>{
        return <ExpenseItem key={exp.id} title={exp.title} date={exp.date} amount={exp.amount}/>
    })}
    </Card>
    </>
  )
}

export default Expenses