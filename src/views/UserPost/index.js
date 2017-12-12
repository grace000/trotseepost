import { Button, Grid, Header, Icon, Image, Card, Embed, Modal, Form, TextArea } from 'semantic-ui-react'
import React, { Component } from 'react'
import LeftPanel from '../Layout/LeftPanel'
import MapHeader from '../Layout/Map'
import MainHeader from '../Layout/MainHeader'

const GridStyle = {
	margin:'0',
	float: 'right',
	padding:'1em'
}

export default class UserPost extends Component {
 

  render() {
    return (
    	<Grid style={GridStyle}>

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

	     <Grid.Row style={{ paddingLeft: '5em'}}>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/600622/pexels-photo-600622.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Amsterdam</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/10922/pexels-photo-10922.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Rome</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
  			 <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/213407/pexels-photo-213407.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>San Francisco</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	     </Grid.Row>

	     <Grid.Row style={{ paddingLeft: '5em'}}>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/600622/pexels-photo-600622.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Amsterdam</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
	        <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/10922/pexels-photo-10922.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>Rome</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	      <Grid.Column width={5}>
  			 <Card raised style={{ borderRadius:'0'}}>
			    <Image src='https://static.pexels.com/photos/213407/pexels-photo-213407.jpeg' />
			    <Card.Content>
			      <Card.Header style={{ color: '#808080', textAlign:'left' }}>San Francisco</Card.Header>
			    </Card.Content>
  			</Card>
	      </Grid.Column>
	     </Grid.Row>

	  </Grid>
     
    )
  }
}