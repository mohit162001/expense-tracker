import React from "react";
import "./CSS/expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem({title,date,amount}) {
  return (
    <Card className="expense-item">
        <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price ">{amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
