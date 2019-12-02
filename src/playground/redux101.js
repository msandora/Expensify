// console.log("redux.js.org");
import { createStore } from 'redux';
                      // State // Default value
const store = createStore((state = { count: 0 }, action) => {

  switch(action.type){
    case 'INCREMENT':
        // variable = if action is equal to number, perform action
        const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1;
        return {
          count: state.count + incrementBy
        };
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1;
        return {
          count: state.count - decrementBy
        }  
    case 'SET':
        return {
          count: action.count
        }  
    case 'RESET':
        return {
          count: 0
        }  
    default:
        return state;
  }

});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - an object that gets sent to the store
// Ex: walk, stop, sit, work, sto working

// I would like to increment the count by 5
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// unsubscribe();
// I would like to increment the count by 1
store.dispatch({
  type: 'INCREMENT'
});
// I would like to reset the count to zero
store.dispatch({
  type: 'RESET'
});
// I would like to decrement the count by 1
store.dispatch({
  type: 'DECREMENT'
});
// I would like to decrement the count by 10
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});
// Set count to 101
store.dispatch({
  type: 'SET',
  count: 101
});
// console.log(store.getState());
