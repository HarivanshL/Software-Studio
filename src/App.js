import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      {/*Insert NavBar*/}
      {/*Insert more paths as needed*/}
      <Router>
        <Route path = '/login'>
          {/*Add login component*/}
        </Route>
        <Route path = '/home'>
          {/*Add home component*/}
        </Route>
      </Router>
      {/*Conditional rendering of components based on login status*/}
    </div>
  );
}

export default App;
