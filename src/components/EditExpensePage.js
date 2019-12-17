import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
//// Because of mapDispatchToProps we can remove dispatch method
// this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
// this.props.dispatch(removeExpense({ id: this.props.expense.id }));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() { 
    return ( 
      <div>
        {/* Editing the expense with id of {this.props.match.params.id}
        <h1>Edit Expense</h1>*/}
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};
 
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    // Same thing, long hand
    // expense: state.expenses.find((expense) => {
    //   return expense.id === props.match.params.id;
    // })
  }
};

const mapDispatchToProps = (dispatch) => ({
  // You can see above that data needs to flow through editExpense
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


// THIS USED TO BE A FUNCTIONAL COMPONENT

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       Editing the expense with id of {props.match.params.id}
//       <h1>Edit Expense</h1>
//       <ExpenseForm 
//         expense={props.expense}
//         onSubmit={(expense) => {
//           // console.log(expense);
//           props.dispatch(editExpense(props.match.params.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={(e) => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   )
// }

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     // Same thing, long hand
//     // expense: state.expenses.find((expense) => {
//     //   return expense.id === props.match.params.id;
//     // })
//   }
// };

// export default connect(mapStateToProps)(EditExpensePage);
