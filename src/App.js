import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CarParkListing from "./containers/CarParkListing";
import CarParkDetail from "./containers/CarParkDetail";
import './App.css';

function App(){
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<CarParkListing/>}/>
            <Route path="/carpark/:carParkNo" element={<CarParkDetail/>}/>
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
