import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { state } from './store/';

export const store = createStore(
    state,
    compose(
        applyMiddleware(
            logger,
            reduxThunk
        ),
        (window).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window).__REDUX_DEVTOOLS_EXTENSION__()
    )
);