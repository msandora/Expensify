// import uuid from 'uuid';
import database from '../firebase/firebase'


// component calls action generator
// action generator returns function
// component dispatches function
// function runs


// ADD_INCOME
export const addIncome = (income) => ({
  type: 'ADD_INCOME',
  income
});

// ADD_INCOME Original
// export const addIncome = (
//     { // addincome argument is an array
//       description = '', // default values
//       note = '', 
//       amount = 0, 
//       createdAt = 0
//     } = {} // Empty array is default
//   ) => ({
//     type: 'ADD_INCOME',
//     income: {
//       id: uuid(),
//       description,
//       note,
//       amount,
//       createdAt
//     } 
//   });

export const startAddIncome = (incomeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '', // default values
      note = '', 
      amount = 0, 
      createdAt = 0
    } = incomeData;
    const income = { description, note, amount, createdAt };
    
    return database.ref(`users/${uid}/incomes`).push(income).then((ref) => {
      dispatch(addIncome({
        id: ref.key,
        ...income
      }))
    });
  };
};

  
// REMOVE_INCOME
export const removeIncome = ({ id } = {}) => ({
  type: 'REMOVE_INCOME',
  id
});

export const startRemoveIncome = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/incomes/${id}`).remove().then(() => {
      dispatch(removeIncome({ id }));
    });
  };
};


// EDIT_INCOME
export const editIncome = (id, updates) => ({
  type:'EDIT_INCOME',
  id,
  updates
});

export const startEditIncome = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/incomes/${id}`).update(updates).then((ref) => {
      dispatch(editIncome(id, updates));
    });
  };
};


// SET_INCOMES
export const setIncomes = (incomes) => ({
  type: 'SET_INCOMES',
  incomes
});

export const startSetIncomes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/incomes`).once('value').then((snapshot) => { 
      const incomes = []; // start with empty array
      snapshot.forEach((childSnapshot) => { // parse data
        incomes.push({ // push all incomes on array
          id: childSnapshot.key,
          ...childSnapshot.val() // spread out all the values
        });
      });

      dispatch(setIncomes(incomes));
    });
  };
};