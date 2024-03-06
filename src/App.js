import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import React from "react";
import Home from './Home'
import Navbar from './Navbar'


function App() {
  return (
    <Router>
    <div className="App">
      {/*Insert NavBar*/}
      <Navbar /> 
      {/*Insert more paths as needed*/}

      <Routes>
        {/*<Route path = '/login'>
          {/*Add login component*/}
        {/*</Route>*/}
        <Route path="/" element={<Home />} />
       {/* <Route path = '/Sponsors'></Route>*/}
        </Routes>

      {/*Conditional rendering of components based on login status*/}
    </div>
    </Router>
  );
}

export default App;
