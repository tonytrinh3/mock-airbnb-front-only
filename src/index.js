import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

import * as serviceWorker from './serviceWorker';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


// console.log("aewf",process.env.REACT_APP_GOOGLE_MAP);
// console.log(process.env.NODE_ENV)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
