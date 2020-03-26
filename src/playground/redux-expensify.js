import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';











store.subscribe(() => {
    const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( {description: 'Rent', note: '', amount: 100, createdAt: 1000} ));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', note: '', amount: 300, createdAt: -1000} ));

// store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 4000, note: 'Too expensive cofee!!' } ));

store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(1999));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

