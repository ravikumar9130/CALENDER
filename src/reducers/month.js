import {
    
    CHANGE_MONTH
  } from "../actions/types";
  import moment from 'moment';
  
  const initialState = {data:moment()};
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
       case CHANGE_MONTH:
        return {
          ...state,
          data: payload.MonthData,
        };
   
      default:
        return state;
    }
  }