import uuid from 'uuid';
import database from '../firebase/firebase'


// component calls action generator
// action generator returns function
// component dispatches function
// function runs


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// ADD_EXPENSE Original
// export const addExpense = (
//     { // addexpense argument is an array
//       description = '', // default values
//       note = '', 
//       amount = 0, 
//       createdAt = 0
//     } = {} // Empty array is default
//   ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: uuid(),
//       description,
//       note,
//       amount,
//       createdAt
//     } 
//   });

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', // default values
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

  
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => { 
      const expenses = []; // start with empty array
      snapshot.forEach((childSnapshot) => { // parse data
        expenses.push({ // push all expenses on array
          id: childSnapshot.key,
          ...childSnapshot.val() // spread out all the values
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};