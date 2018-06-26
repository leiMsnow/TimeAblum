import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import looger from 'redux-logger';
import rootReducer from '../reducers';

let middleware = [thunk];

if (__DEV__) {
    middleware = [...middleware, looger];
} else {
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
