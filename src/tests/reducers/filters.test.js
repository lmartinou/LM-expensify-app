import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should init the filters with default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set soft by amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT' } );
    expect(state.sortBy).toBe('amount');
})

test('should set soft by date', () => {
    //by default sorting is by date, so i pass in a state with sortBy amount to make sure it changes properly
    const curState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(curState, {type: 'SORT_BY_DATE' } );
    expect(state.sortBy).toBe('date');
});

test('should set text filter by provided value', () => {    
    const text = '1234';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text } );
    expect(state.text).toBe(text);
});

test('should set startDate', () => {
    const startDate = moment();    
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate } );
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
    const endDate = moment();    
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate } );
    expect(state.endDate).toEqual(endDate);
});