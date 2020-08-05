import { createStore, combineReducers, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import { rapperEnhancer, rapperReducers } from './rapper';

const reducers = combineReducers({
  ...rapperReducers,
});

// const store = createStore(reducers, compose(rapperEnhancer(), applyMiddleware(createLogger())));

const store = createStore(reducers, compose(rapperEnhancer()));

export default store;
