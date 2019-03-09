import { combineReducers } from 'redux';
import { reducer as categories } from './categories';
import { reducer as posts } from './posts';

const rootReducer = combineReducers({ categories, posts });

export default rootReducer;
