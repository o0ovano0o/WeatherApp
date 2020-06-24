import {
  UPDATE_NEXT_5DAYS
} from '../actions';
const initialState = {
  weatherDatas: {},
  city:''

};
// cập nhật dữ liệu 5 ngày tiếp theo lấy từ API về
const daysData = (state = initialState, action = {}) => {
  switch (action.type) {
      case UPDATE_NEXT_5DAYS: {
          return {...state,
           weatherDatas:action.weatherDatas,
          };
        }
      default:
          return state;
  }
};


export default daysData;