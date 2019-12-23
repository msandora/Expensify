import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<React.Fragment>
			<div className="top">
				<div className="budget">
					<div className="budget__title">
					Viewing <span>{expenseCount}</span> {expenseWord} totalling  
					</div>
					
					<div className="budget__value">{formattedExpensesTotal}</div>
					
					<div className="budget__income clearfix">
						<div className="budget__income--text">Income</div>
						<div className="right">
								<div className="budget__income--value">+ 0</div>
								<div className="budget__income--percentage">&nbsp;</div>
						</div>
					</div>
					
					<div className="budget__expenses clearfix">
						<div className="budget__expenses--text">Expenses</div>
						<div className="right clearfix">
								<div className="budget__expenses--value">- {formattedExpensesTotal}</div>
								<div className="budget__expenses--percentage">45%</div>
						</div>
					</div>
				</div>
		</div>
				<div className="page-header">
					<div className="content-container">
						<div className="page-header__actions">
							<Link className="button" to="/create">Add Expense</Link>
						</div>           
					</div>
				</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);