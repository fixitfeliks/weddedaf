import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Location from "./components/Location";

function App() {
  return (
    <div>
      <Header />
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/accommodations">
            <Location />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
