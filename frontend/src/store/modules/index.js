import { combineReducers } from 'redux';
import { reducer as categories } from './categories';
import { reducer as posts } from './posts';
import { reducer as ui } from './ui';
import { reducer as post } from './post';

const rootReducer = combineReducers({ categories, posts, ui, post });

export default rootReducer;
