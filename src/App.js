import {Redirect, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Homepage from "../src/views/Homepage"
import Login from "../src/views/Login"
import Profile from "../src/views/Profile"
import SearchHome from "../src/views/SearchHome"
import LeftPanel from'../src/views/Layout/LeftPanel'
import UserSave from "../src/views/UserSave"
import UserPost from "../src/views/UserPost"
import ActiveSearch from "../src/views/ActiveSearch"


const renderHomepage       = () => <Homepage />
const renderProfile        = () => <Profile />
const renderSearchHome     = () => <SearchHome />
const renderLogin          = () => <Login />
const renderUserSave	   = () => <UserSave />
const renderUserPost	   = () => <UserPost />
const renderActiveSearch   = () => <ActiveSearch />

const App = () => (
  <Router>
 
    

      <Switch>
      
        <Route exact path="/"                      render={renderHomepage} />

        <Route exact path="/profile"               render={renderProfile } />
        <Route exact path="/login"                 render={renderLogin } />
        <Redirect path="/" />

        
            <Switch>
			
			 <Route exact path="/profile"            render={renderProfile}  >
              <Route exact path="/searchhome"            render={renderSearchHome} />
              <Route exact path="/usersave"     		 render={renderUserSave} />
              <Route exact path="/userpost"     		 render={renderUserPost} />
              <Route exact path="/activesearch"     	 render={renderActiveSearch} />
            </Route>
              
          
           
            </Switch>
       		
        

      </Switch>
    
   
  </Router>
)

export default App;
