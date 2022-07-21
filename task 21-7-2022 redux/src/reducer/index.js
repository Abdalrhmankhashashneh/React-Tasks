import { combineReducers } from 'redux';
import counter from './CounterReducer';
const AllReducers = combineReducers({
    counter: counter,
});

export default AllReducers;