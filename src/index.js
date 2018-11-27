import React from 'react';
import { render } from 'react-dom';
import './css/style.css'
import Router from './components/Router';
import Store from './js/store/index'

const store = Store();
store.subscribe(() => console.log('store', store.getState()));

render(
    <Router />,
    document.getElementById('main')
);

window.addEventListener('beforeinstallprompt', function(e) {
    e.userChoice.then(function(choiceResult) {
  
      console.log(choiceResult.outcome);
  
      //check apkaah user menambahkan ke home atau tidak
      if(choiceResult.outcome === 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }
    });
  });
  