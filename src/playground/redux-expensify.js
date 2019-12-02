import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions
// ADD_EXPENSE
const addExpense = (
  { // addexpense argument is an array
    description = '', // default values
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {} // Empty array is default
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  } 
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE': 
      //return state.concat(action.expense);
        return [ 
          ...state, 
          action.expense
        ];
      case 'REMOVE_EXPENSE': 
        // Return new array
        return state.filter(({ id }) => id !== action.id);
      default:
        return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
      default:
        return state;
    }
};


// Store creation combines reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,    
    filters: filtersReducer    
  })
);
// Track Changes
store.subscribe(() => {
  console.log(store.getState());
}); 

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses:[{ // Array of objects
    id: 'blahblah',
    description: 'January Rent',
    note: 'This was finalpayment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: { // Object with various properties
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

const user = {
  name: 'Jen',
  age: 24
};

// console.log({
//   ...user
// });