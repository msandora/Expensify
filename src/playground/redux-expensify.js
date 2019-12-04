import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions / Action Generators

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
const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type:'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type:'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
});

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE': 
      //return state.concat(action.expense);
        return [ // Array spread operator
          ...state, 
          action.expense
        ];
      case 'REMOVE_EXPENSE': 
        // Return new array
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE': 
        // Return new array
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            }
          } else {
            return expense;
          }
        })
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
      case 'SET_TEXT_FILTER': 
        return {
          ...state, 
          text: action.text
        };
      case 'SORT_BY_AMOUNT': 
        return {
          ...state, 
          sortBy: 'amount'
        };
      case 'SORT_BY_DATE': 
        return {
          ...state, 
          sortBy: 'date'
        };
      case 'SET_START_DATE': 
        return {
          ...state, 
          startDate: action.startDate
        };
      case 'SET_END_DATE': 
        return {
          ...state, 
          endDate: action.endDate
        };
      default:
        return state;
    }
};

//Get visisble expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

 
    // IF all thre are true, return
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation, combines reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,    
    filters: filtersReducer    
  })
);
// Track Changes
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
}); 

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }));

// store.dispatch(setTextFilter('ee'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate()); 

// store.dispatch(setStartDate(0)); 
// store.dispatch(setStartDate()); 
// store.dispatch(setEndDate(999)); 






// const demoState = {
//   expenses:[{ // Array of objects
//     id: 'blahblah',
//     description: 'January Rent',
//     note: 'This was finalpayment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: { // Object with various properties
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'Jen',
//   age: 24
// };

// console.log({
//   age: 27,
//   ...user,
//   location: "Philadelphia"
// });