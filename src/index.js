import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'


import * as serviceWorker from './serviceWorker';





import './index.css';
import App from './App';

import createRootReducer from './redux/reducers/index'
import { fetchAllTasks } from './redux/actions/index';


const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history), // root reducer with router state
  {},
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
)


    // const store = createStore(
    //     rootReducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     applyMiddleware(thunk));

store.dispatch(fetchAllTasks());
store.subscribe(()=>{console.log("redux")})

ReactDOM.render(
    
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
