"use strict";

export function contactReducers(state={contact: []}, action){
 switch(action.type){
        case "FETCH_MESSAGE":
        return {...state, contact: [...action.payload]}
        break;

        case "POST_MESSAGE": 
        return {contact: [...state.contact, ...action.payload], msg: 'Saved! Click to continue', style: 'success', validation: 'success'}
        break;

        case "POST_MESSAGE_REJECTED": 
        return {...state, msg: 'Please, try again. Error occured', style: 'danger', validation: 'error'}
        break;

        case "RESET_BUTTON": 
        return {...state, msg: null, style: 'primary', validation: null}
        break;
    }
    return state;
}
