import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Card,
  Segment
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MainHeader from '../Layout/MainHeader'
import UserSave from '../UserSave'
import UserPost from '../UserPost'
import SearchHome from '../SearchHome'
import Homepage from '../Homepage'


const MenuStyle = {
	height: '100%',
	backgroundColor:'#bbf0f0'
}

const routes = [
  { path: '/searchhome',
    exact: true,
    main: () => <SearchHome/>
  },
  { path: '/userpost',
    main: () => <UserPost/>
  },
  { path: '/usersave',
    main: () => <UserSave/>
  }
]



export default class LeftPanel extends Component{

	state = { activeItem: 'trotSee' }

  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  	render() {
    	const { activeItem } = this.state

    	return (
    		<Router>
    			<div style={{height: '100vh', display: 'flex'}}>
			      	<Menu style={MenuStyle} pointing secondary vertical>
			        
				        <Menu.Item name='trotSee' 
				        		   active={activeItem === 'trotSee'} 
				        		   onClick={this.handleItemClick} 
				        		   as={ Link } 
				        		   to='/searchhome'
				        		   style={{fontSize:'2em', padding:'15px', color: '#fff', fontFamily: 'Josefin Sans'}}/>
				        <Menu.Item name='posted trots' 
				        		   active={activeItem === 'posted trots'} 
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/userpost'/>
				        <Menu.Item name='saved trots' 
				        		   active={activeItem === 'saved trots'} 
				        		   onClick={this.handleItemClick}
				        		   as={ Link } 
				        		   to='/usersave'/>
			      	</Menu>
		     
			       <div style={{ flex: 1, padding: '10px' }}>
			        {routes.map((route, index) => (
			          
			          <Route
			            key={index}
			            path={route.path}
			            exact={route.exact}
			            component={route.main}
			          />
	        		))}
	      			</div>

      			</div>
		    </Router>
		)
	}
}

