import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  // (undefined current state to test defaults, action object)
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
        //:current moment.
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// when we dispatch this action make sure sortBy variable changes to amount
test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy filter to date', () => {
  const currentState = {
    text: '', //anything
    startDate: undefined, //dont care
    endDate: undefined, //dont care
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
  const text = 'This is my filter';
  const action = { 
    type: 'SET_TEXT_FILTER', 
    text 
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  //moment() = current point in time
  const startDate = moment();
  const action = { 
    type: 'SET_START_DATE', 
    startDate 
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  //moment() = current point in time
  const endDate = moment();
  const action = { 
    type: 'SET_END_DATE', 
    endDate 
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});