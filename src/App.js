import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components"

function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/my-portfolio">
              <Home />
            </Route>
          </Switch>
        </HashRouter>
      </div>
  );
}

export default App;
