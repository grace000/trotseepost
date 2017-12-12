import React, { Component } from 'react'
import { Input, Grid, Header } from 'semantic-ui-react'
import MainHeader from '../Layout/MainHeader'
import UserPost from '../UserPost'
import LeftPanel from '../Layout/LeftPanel'

export default class SearchHome extends Component {
	render() {
		return (
			<div>
			<MainHeader/>
			
			<Grid.Row>
			<Input 
			    action={{ color: 'teal', icon: 'search' }}
			    actionPosition='right'
			    placeholder='Search...'
			    defaultValue='Chicago'
			    style={{width: '30em', float:'right', margin: 'auto'}}
  			/>
  			<Grid.Column>
  				<Header 
			    content='Explore Chicago'
			    style={{width: '30em', fontSize:'2em', margin: 'auto'}}
			    />
  			</Grid.Column>
  			</Grid.Row>
  			<UserPost/>
  			</div>
		)
	}
}


