import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
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
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
  });
  