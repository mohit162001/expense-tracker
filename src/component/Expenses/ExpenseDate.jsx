import React from "react";
import "./CSS/expensedate.css";
function ExpenseDate({ date }) {

  const year = date.getFullYear();
  const Date = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>

      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{Date}</div>
    </div>
  );
}

export default ExpenseDate;
