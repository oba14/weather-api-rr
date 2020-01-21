import { combineReducers } from 'redux';
import {hourlyTemp} from './hourlyTemp';
import {temp} from './temp';

const rootReducer = combineReducers({
    hourlyTemp,
    temp
  });
  
  export default rootReducer;