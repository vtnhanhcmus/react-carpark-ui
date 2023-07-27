import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CarParkListing from "./containers/CarParkListing";
import './App.css';

function App(){
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<CarParkListing/>}/>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
