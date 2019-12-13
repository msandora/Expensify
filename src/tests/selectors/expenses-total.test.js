import selectExpensesTotal from '../../selectors/expenses-total';
import expenseTestData from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenseTestData[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenseTestData);
    expect(res).toBe(114195);
});