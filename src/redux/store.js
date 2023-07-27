import { configureStore } from "@reduxjs/toolkit";
import reducers  from "./reducers/index";

const store = configureStore({
    reducer: reducers,
    // Additional configuration options can be passed here
    preloadedState: [],
    enhancers: [(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || ((f) => f)],
  });
  

export default store;
