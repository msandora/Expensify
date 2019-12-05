import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation, combines reducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,    
            filters: filtersReducer    
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for redux dev tools
    );
    return store;
}

