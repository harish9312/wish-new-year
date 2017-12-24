import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';

export function configureStore(initialState = {}) {
    let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(
        rootReducer,
        composeEnhancer(
            applyMiddleware(...getMiddleWares())
        ),
    );
    return store;
}

export function getMiddleWares() {
    return [
        thunk,
        promiseMiddleware()
    ];
}

export const store = configureStore();