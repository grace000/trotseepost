import {Redirect, Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import React from 'react'
import logo from './logo.svg'
import './App.css'
import Homepage from "../src/views/Homepage"
import Login from "../src/views/Login"
import Profile from "../src/views/Profile"
import SearchHome from "../src/views/SearchHome"


const renderHomepage       = () => <Homepage />
const renderProfile        = () => <Profile />
const renderSearchHome     = () => <SearchHome />
const renderLogin          = () => <Login />


const App = () => (
  <Router>
    
      <Switch>
        <Route exact path="/"                      render={renderHomepage} />
        <Route exact path="/profile"               render={renderProfile } />
        <Route exact path="/login"                 render={renderLogin } />
        <Redirect path="/" />
      </Switch>
    
  </Router>
)

export default App;
