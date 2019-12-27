import React from 'react';
// https://reacttraining.com/react-router/web/guides/quick-start
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import AddIncomePage from '../components/AddIncomePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true}/>
      <PrivateRoute path="/dashboard" component={DashboardPage}/>
      <PrivateRoute path="/create-income" component={AddIncomePage} />
      <PrivateRoute path="/create-expense" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </Router>
);

export default AppRouter;