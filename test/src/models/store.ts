import { createStore, combineReducers } from 'redux';
import { rapperEnhancer, rapperReducers } from './rapper';

const reducers = combineReducers({
  ...rapperReducers,
});

const store = createStore(reducers, rapperEnhancer());

export default store;
