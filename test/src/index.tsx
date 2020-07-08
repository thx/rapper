import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { overrideFetch } from './models/rapper'

overrideFetch({
    prefix: 'http://rap2api.taobao.org/app/mock/237514',
    // query: () => {
    //   return { a: 1, b: [], c: { a: [] } };
    // },
    query: { token: '34213' },
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
