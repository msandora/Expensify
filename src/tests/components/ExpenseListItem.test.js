import React from 'react';
import { shallow } from 'enzyme';
import expenseTestData from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenseTestData[0]} />);
    expect(wrapper).toMatchSnapshot();
});