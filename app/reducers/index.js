import { createStore, combineReducers } from 'redux';
import searchReducer  from './search';
import  daysData  from './daysData';
// redux lưu trữ quản lý các thông tin thời tiết lấy từ API.
const rootReducer = combineReducers({
    searchReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;