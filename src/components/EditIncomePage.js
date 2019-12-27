import React from 'react';
import { connect } from 'react-redux'
import IncomeForm from './IncomeForm';
import { startEditIncome, startRemoveIncome } from '../actions/incomes';


export class EditIncomePage extends React.Component {
  onSubmit = (income) => {
    this.props.startEditIncome(this.props.income.id, income);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveIncome({ id: this.props.income.id });
    this.props.history.push('/');
  };
  render() { 
    return ( 
      <div>
        {/* Editing the income with id of {this.props.match.params.id}
        <h1>Edit Income</h1>*/}

        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Income</h1>
          </div>
        </div>
        <div className="content-container">
          <IncomeForm income={this.props.income} onSubmit={this.onSubmit}/>
          <button className="button button--secondary" onClick={this.onRemove}>Remove Income</button>
        </div>
      </div>
    );
  }
};
 
const mapStateToProps = (state, props) => {
  return {
    income: state.incomes.find((income) => income.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch) => ({
    startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
    startRemoveIncome: (data) => dispatch(startRemoveIncome(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);