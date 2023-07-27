import { ActionTypes } from "../constants/action-types";

export const setCarParks = (carparks) => {
    return {
        type: ActionTypes.SET_CAR_PARKS,
        payload: carparks,
    }
};