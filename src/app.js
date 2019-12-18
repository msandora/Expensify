import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter'; 
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import 'normalize.css'; 
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1575478800000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1577034000000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1575219600000 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
// import './playground/promises';

const store = configureStore();
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log('uid', user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
