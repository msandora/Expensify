import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenseTestData from '../fixtures/expenses';

test('should render ExpenseList with expense', () => {
    const wrapper = shallow(<ExpenseList expenses={expenseTestData}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});