import expensesReducer from '../../reducers/expenses';
import expenseTestData from '../fixtures/expenses';

//Make sure default state is empty array
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id : expenseTestData[1].id
  };
  const state = expensesReducer(expenseTestData, action);
                      // removed expenseTestData[1].id
  expect(state).toEqual([expenseTestData[0], expenseTestData[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id : '-1'
  };
  const state = expensesReducer(expenseTestData, action);
                      // No change to array
  expect(state).toEqual(expenseTestData);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    amount: 29500,
    createdAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenseTestData, action);
  expect(state).toEqual([...expenseTestData, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: expenseTestData[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenseTestData, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if expense is not found', () => {
  const amount = 122000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenseTestData, action);
  expect(state).toEqual(expenseTestData);
});

test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenseTestData[1]]
    };
    const state = expensesReducer(expenseTestData, action);
    expect(state).toEqual([expenseTestData[1]]);
});