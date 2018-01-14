import { Button, Grid, Header, Icon, Image, Card, Embed, Input } from 'semantic-ui-react'
import React, { Component } from 'react'

import SearchHome from '../SearchHome'

const GridStyle = {
	margin:'0',
	float: 'right',
	padding:'0 1em'

}


export default class UserSave extends Component {
 

  render() {
    return (
    	<div>
    	<Grid style={GridStyle}>

    	<Grid.Row style={{padding:'0 1em', display:'block', width:'100%'}}>

    		<Header 
			    content='Collected Trots'
			    style={{fontSize:'2em', margin: 'auto'}}
			    />

			<Input 
			    action={{ color: 'teal', icon: 'search' }}
			    actionPosition='right'
			    placeholder='Search...'
			    defaultValue='Chicago'
			    style={{width: '30em', float:'right', margin: 'auto'}}
  			/>
  				
  		</Grid.Row>

	  	<Grid.Row style={{ paddingLeft: '5em'}}>
  		   	<Grid.Column width={5}>
	        	<Card raised style={{ borderRadius:'0'}}>
			    <Embed
				    id='O6Xo21L0ybE'
				    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
				    source='youtube'
				  />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New Delhi</Card.Header>
			    </Card.Content>
				</Card>
      		</Grid.Column>
      		<Grid.Column width={5}>
	        	<Card raised style={{ borderRadius:'0'}}>
			    <Embed
				    id='iKk6_2-AAGc'
				    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
				    source='youtube'
				  />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>New York City</Card.Header>
			    </Card.Content>
				</Card>
      		</Grid.Column>
      		<Grid.Column width={5}>
				 <Card raised style={{ borderRadius:'0'}}>
			    <Embed
				    id='O6Xo21L0ybE'
				    placeholder='https://static.pexels.com/photos/356844/pexels-photo-356844.jpeg'
				    source='youtube'
				  />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Portland</Card.Header>
			    </Card.Content>
				</Card>
      		</Grid.Column>
		</Grid.Row>
    	
    	</Grid>
    	</div>
    )
  }
}


