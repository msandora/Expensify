import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
//// Because of mapDispatchToProps we can remove dispatch method
// this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.startEditExpense(this.props.expense.id, expense);
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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
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
  // You can see above that data needs to flow through startEditExpense
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
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
