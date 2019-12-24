// Incomes reducer
const incomesReducerDefaultState = [];

export default (state = incomesReducerDefaultState, action) => {
    switch(action.type) {
      case 'ADD_INCOME': 
      //return state.concat(action.income);
        return [ // Array spread operator
          ...state, 
          action.income
        ];
      case 'REMOVE_INCOME': 
        // Return new array
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_INCOME': 
        // Return new array
        return state.map((income) => {
          if (income.id === action.id) {
            return {
              ...income,
              ...action.updates
            }
          } else {
            return income;
          };
        });
      case 'SET_INCOMES': 
        return action.incomes;
      default:
        return state;
    }
};
