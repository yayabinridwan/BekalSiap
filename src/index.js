import React from 'react';
import { render } from 'react-dom';
import Store from './js/store/index';
import './css/style.css'
import Router from './components/Router';

const store = Store();
store.subscribe(() => console.log('store', store.getState()));

render(
    <Router />,
    document.getElementById('main')
);
