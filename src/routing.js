import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import { useHistory } from "react-router-dom";
import CharactersDetails from "./CharactersDetail";
export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/details">
          <CharactersDetails />
        </Route>
      </Switch>
    </Router>
  );
}
