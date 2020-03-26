import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should test the removeExpense action, setting the object', () => {
    const action = removeExpense({ id: '123abc' });
    //for objects and arrays toBe (===) will not work. instead use toEqual (checks all properties/elements)
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should test the editExpense action, setting the object', () => {
    const action = editExpense('123abc', { description: 'Desc', note: 'Note', amount: 1, createdAt: 100 });
    //for objects and arrays toBe (===) will not work. instead use toEqual (checks all properties/elements)
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Desc',
            note: 'Note',
            amount: 1,
            createdAt: 100
        }
    });
});

test('should test the addExpense action, setting the object with provided values', () => {
    const action = addExpense({ 
        description: 'Desc', 
        note: 'Note', 
        amount: 1, 
        createdAt: 100
    });
    //for objects and arrays toBe (===) will not work. instead use toEqual (checks all properties/elements)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Desc',
            note: 'Note',
            amount: 1,
            createdAt: 100,
            id: expect.any(String)
        }
    });
});

test('should test the addExpense action, setting the object with default values', () => {
    const action = addExpense();
    //for objects and arrays toBe (===) will not work. instead use toEqual (checks all properties/elements)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});