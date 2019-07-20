import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

export default function initializeStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    )
}