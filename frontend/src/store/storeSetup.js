import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import client from '../utils/request';
import { clientMiddleware } from './middlewares';

const compose = composeWithDevTools(applyMiddleware(thunk, clientMiddleware(client), logger));

const store = createStore(rootReducer, compose);

export default store;
