import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      {/*Insert NavBar*/}
      <Router>
        <Route path = '/login'>
          {/*Add login component*/}
        </Route>
        <Route path = '/home'>
          {/*Add home component*/}
        </Route>
      </Router>
    </div>
  );
}

export default App;
