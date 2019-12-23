import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpensesSummaryNew from './ExpensesSummaryNew';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummaryNew />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
