import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';
import ExpensesSummaryNew from './ExpensesSummaryNew';

const DashboardPage = () => (
  <div>
    <ExpensesSummaryNew />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
