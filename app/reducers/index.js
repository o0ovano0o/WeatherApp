import { createStore, combineReducers } from 'redux';
import searchReducer  from './search';
import  daysData  from './daysData';

const rootReducer = combineReducers({
    searchReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;