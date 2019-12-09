import expensesReducer from '../../reducers/expenses';


//Make sure default state is empty array
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

