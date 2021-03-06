import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/my-portfolio">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
