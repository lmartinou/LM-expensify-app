//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';

import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense( {description: 'Water bill', note: '', amount: 100, createdAt: 1585645200000} ));
store.dispatch(addExpense( {description: 'Gas bill', note: '', amount: 300, createdAt: 1583485200000} ));
store.dispatch(addExpense( {description: 'Rent', note: '', amount: 10300, createdAt: 1585299600000} ));

//console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
