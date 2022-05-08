import { combineReducers } from 'redux';
import { quotesReducer} from './quotes';
import {authorsReducer} from './authors';

const rootReducer =  combineReducers({
  quotes:quotesReducer,
  authors: authorsReducer
});

export default rootReducer;





