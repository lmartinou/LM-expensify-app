import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('shour set default state for expenses', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove an expense from the state', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should remove nothing for invalid id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add a new expense', () => {
    const expense = {
        id: '4',
        amount: 100,
        description: 'from test',
        note: ''
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: -100
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(-100);
});

test('should not edit non-existing expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: -100
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
