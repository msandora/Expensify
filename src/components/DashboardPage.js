import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

const DashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <div className="content-container">
      <IncomeList />
      <ExpenseList />
    </div>

  </div>
);

export default DashboardPage;
