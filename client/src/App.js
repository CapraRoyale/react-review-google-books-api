import React from "react";
// Import a specifci module from raect-router-dom and assign the names Router, Route and Switch
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import components we've made for use in our app
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
