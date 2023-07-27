import {combineReducers} from "redux";
import {carParksReducer} from "./carParkReducer";

const reducers = combineReducers({
    allCarparks : carParksReducer,
});

export default reducers;
