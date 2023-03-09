import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components"

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
        <Route path="/my-portfolio" element={<Home />} />
      </Routes>
        </Router>
      </div>
  );
}

export default App;
