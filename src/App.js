import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './page-de-contact';
import History from './History';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
          <NavLink to="/page-de-contact" activeClassName="selected"> Contact </NavLink>
          <NavLink to="/History" activeClassName="selected"> Histoire </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page-de-contact" component={Contact} />
            <Route path="/History" component={History} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;