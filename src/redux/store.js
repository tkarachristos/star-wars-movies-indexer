import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

export default function initializeStore () {
    return createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    )
}