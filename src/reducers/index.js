import { combineReducers } from "redux";
import calender from "./calender";
import month from "./month";
import weekReducer from './weekReducer'

export default combineReducers({
  calender,
  month,
  weekReducer
});