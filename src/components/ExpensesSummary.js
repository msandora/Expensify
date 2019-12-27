import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import selectIncomes from '../selectors/incomes';
import selectIncomesTotal from '../selectors/incomes-total';

export const ExpensesSummary = ({expenseCount, expensesTotal, incomeCount, incomesTotal}) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
	const incomeWord = incomeCount === 1 ? 'income' : 'incomes' ;
	const formattedIncomesTotal = numeral(incomesTotal / 100).format('$0,0.00');
	return (
		<React.Fragment>
			<div className="top">
				<div className="budget">
					<div className="budget__title">
					Viewing <span>{incomeCount}</span> {incomeWord}  
					</div>
					<div className="budget__income clearfix">
						<div className="budget__income--text">Income</div>
						<div className="right">
								<div className="budget__income--value">+ {formattedIncomesTotal}</div>
								<div className="budget__income--percentage">&nbsp;</div>
						</div>
					</div>
					<div className="budget__title">
					Viewing <span>{expenseCount}</span> {expenseWord}  
					</div>
					<div className="budget__expenses clearfix">
						<div className="budget__expenses--text">Expenses</div>
						<div className="right clearfix">
								<div className="budget__expenses--value">- {formattedExpensesTotal}</div>
								<div className="budget__expenses--percentage">&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
			<div className="page-header">
				<div className="content-container">
					<div className="page-header__actions">
					<Link className="button income-bg" to="/create-income">Add Income</Link>
					<Link className="button expense-bg" to="/create-expense">Add Expense</Link>
					</div>           
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	const visibleIncomes = selectIncomes(state.incomes, state.filters);
    return {
        expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
		incomeCount: visibleIncomes.length,
        incomesTotal: selectIncomesTotal(visibleIncomes)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);