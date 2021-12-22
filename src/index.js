import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'Components/App/App.jsx';
import store from 'Store/store.jsx';

import 'Src/styles/css/common.css';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
