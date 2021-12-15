import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import tasksReducer from '../features/Tasks/tasksSlice.js'
import App from '../App.js'


const store = createStore(tasksReducer, window.__PRELOADED_STATE__)

delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

export default client = () => {

  const get = (path) => {
    const requestUrl = './' + path + '.json';
    // const request = new XMLHttpRequest();
    
    // request.open('GET', requestUrl);
    
    // request.responseType = 'json';
    // request.send();
    
    // request.onload = function() {
      //   const data = request.response;
      // }
      const data = JSON.parse(requestUrl);
      return data;
    };

};