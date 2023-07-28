import {combineReducers} from "redux";
import {carParksReducer, selectedCarParkReducer} from "./carParkReducer";

const reducers = combineReducers({
    allCarparks : carParksReducer,
    carpark: selectedCarParkReducer,
});

export default reducers;
