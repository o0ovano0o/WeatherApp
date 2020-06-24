import {
  UPDATE_NEXT_5DAYS
} from '../actions';
const initialState = {
  weatherDatas: {},
  city:''

};

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