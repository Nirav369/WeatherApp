import { combineReducers } from 'redux';

// reducers
import { SearchReducer } from '../store/search/reducer'


export const state = combineReducers({
    search: SearchReducer,
  });