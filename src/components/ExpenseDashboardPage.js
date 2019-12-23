import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpensesSummaryNew from './ExpensesSummaryNew';

const DashboardPage = () => (
  <div>
    <ExpensesSummaryNew />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
