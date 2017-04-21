import { createStore, applyMiddleware, combineReducers } from 'redux';

import reduxLogger from 'redux-logger';

import { MessagesReducer, AnotherReducer } from './reducer';

const middleware = store => next => action => {
    
    next(action);
}

export default createStore(
    combineReducers({
        messages: MessagesReducer,
        user: AnotherReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
       reduxLogger,
       middleware
    )
);
