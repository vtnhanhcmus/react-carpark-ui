import {ActionTypes} from "../constants/action-types";

const initState = {
    carparks: [],
}


export const carParksReducer = (state = initState, {type, payload}) =>{
    console.log(type);
    switch (type) {
        case ActionTypes.SET_CAR_PARKS:
            return {...state, carparks: payload};
        default:
            return state;
    }
}

export const selectedCarParkReducer = (state= {}, {type, payload}) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_CARPARK:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_CARPARK:
            return {};
        default:
            return state;
    }
}



