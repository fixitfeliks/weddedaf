import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';

import Home from './components/Home';
import Location from './components/Location';
import Registry from './components/Registry';

import loadRegPic from './public/regpic3.jpg';

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
