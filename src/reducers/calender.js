import {
    ADD_VISIT,
  } from "../actions/types";
  
  const initialState = [];
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      
      
      case ADD_VISIT:
        return {
          ...state,
          data: payload.CalenderData,
        };
  
   
      default:
        return state;
    }
  }