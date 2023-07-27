import {ActionTypes} from "../constants/action-types";

const initState = {
    carparks: [],
}


export const carParksReducer = (state = initState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_CAR_PARKS:
            return {...state, carparks: payload};
        default:
            return state;
    }
}



