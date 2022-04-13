import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
}

return (<ul className="expenses-list">

{props.items.map((expense) => ( //u Reactu nema if ili for u curly braces, zbog tog pisemo ovakav izraz a ? jer ternarni operator u JSu po defaultu, ako je tacna tvrdnja ispisi No expenses, otherwise renderuj standardno listu
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}  
</ul>
);
};

export default ExpensesList;
