import React from 'react';
import { connect } from 'react-redux';
// import ExpenseListItem from './ExpenseListItem';
import selectIncomes from '../../selectors/incomes';

export const IncomeList = (props) => (
    <div className="incomes">
      <div className="list-header">
        <div className="show-for-mobile">Incomes</div>
        <div className="show-for-desktop">Income</div>
        <div>Amount</div>
      </div>
    </div>  
);

const mapStateToProps = (state) => {
  return {
        // incomes: selectIncomes(state.incomes, state.filters)
    };
}

export default connect(mapStateToProps)(IncomeList);

