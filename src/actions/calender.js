import {ADD_VISIT,CHANGE_MONTH,WEEK_DAY} from './types'


export const calender = () => (dispatch) => {
    return (data) => {
       return dispatch({
          type: ADD_VISIT,
          payload: {CalenderData: data },
        });
       
    }};

export const month = () => (dispatch) => {
    return (data) => {
       return dispatch({
          type: CHANGE_MONTH,
          payload: {MonthData: data },
        });
       
    }};


export const week = () => (dispatch) => {
    return (data) => {
       return dispatch({
          type: WEEK_DAY,
          payload: {WeekData: data },
        });
       
    }};