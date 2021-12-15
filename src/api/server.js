import qs from 'qs';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from '../features/Tasks/tasksSlice.js';
import App from '../App.js';
import { renderToString } from 'react-dom/server';

const app = Express()
const port = 3000

app.use('/static', Express.static('static'))

app.use(handleRender)


function handleRender(req, res) {
    const params = qs.parse(req.query);
    const store = createStore(tasksReducer);

    const html = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}
function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/static/bundle.[hash].js"></script>
      </body>
    </html>
    `;
}

app.listen(port)