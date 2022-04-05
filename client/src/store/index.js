import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer.js'
import thunk from 'redux-thunk';

export const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
