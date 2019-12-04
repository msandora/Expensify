// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
