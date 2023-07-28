import { ActionTypes } from "../constants/action-types";

export const setCarParks = (carparks) => {
    return {
        type: ActionTypes.SET_CAR_PARKS,
        payload: carparks,
    }
};

export const seletedCarPark = (carpark) => {
    return {
        type: ActionTypes.SELECTED_CARPARK,
        payload: carpark,
    }
};

export const removedSeletedCarPark = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_CARPARK,
    }
};