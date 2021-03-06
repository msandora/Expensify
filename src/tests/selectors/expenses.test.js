import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenseTestData from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenseTestData, filters);
    expect(result).toEqual([expenseTestData[2], expenseTestData[1]])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenseTestData, filters);
    expect(result).toEqual([expenseTestData[2], expenseTestData[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenseTestData, filters);
    expect(result).toEqual([expenseTestData[0], expenseTestData[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenseTestData, filters);
    expect(result).toEqual([expenseTestData[2], expenseTestData[0], expenseTestData[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenseTestData, filters);
    expect(result).toEqual([expenseTestData[1], expenseTestData[2], expenseTestData[0]]);
});