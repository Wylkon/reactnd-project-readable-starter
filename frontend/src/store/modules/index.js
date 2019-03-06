import { combineReducers } from 'redux';
import { reducer as categories } from './categories';

const rootReducer = combineReducers({ categories });

export default rootReducer;
