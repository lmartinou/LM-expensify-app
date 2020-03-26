import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('should render ExpenseListFilters correctly', () => {    
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps( { filters: altFilters })    
    expect(wrapper).toMatchSnapshot();
});

test('should set text filter correctly', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'abc'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('abc');
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled(); // .toHaveBeenLastCalledWith('date');
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled(); // .toHaveBeenLastCalledWith('date');
});

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altFilters.startDate, endDate: altFilters.endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus change', () => {
    const focus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calendarFocused')).toBe(focus);    
});