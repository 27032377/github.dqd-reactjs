import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css';
// import App from './App';
import Routes from './router/index.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
