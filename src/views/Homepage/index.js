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
  Segment
} from 'semantic-ui-react'

const LandpageImage = styled(Image)`
 {
    width:  100%;
    height: 60vw;
    background-image: url('https://static.pexels.com/photos/190339/pexels-photo-190339.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`
const FixedMenu = () => (
  <Segment inverted>
    
      <Menu inverted pointing secondary>
        <Menu.Item className='item' position="right">
          <Button as='a' inverted>Log in</Button>
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Menu>
  
  </Segment>
)

export default class Homepage extends Component {
 

  render() {
    return (
      <div>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: 0}}
            vertical
          >

          
          	<LandpageImage>
            <Container text>
              
              <Header
                as='h1'
                content='TrotSeePost'
                inverted
                style={{ fontSize: '5em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
              />

             <Divider hidden />
           
              <Button size='huge' color='teal'>
                Get Started
                <Icon name='right arrow' />
              </Button>

              <Button size='huge' color='teal'>
                Login/Sign Up
              </Button>
             
            </Container>
            </LandpageImage>
          </Segment>

        
       <Container style={{ padding: '8em 0em' }} vertical>
       <Header as='h3' style={{ fontSize: '2em', textAlign:'left', paddingLeft:'2em'}}>Tips and tricks, made personal!</Header>
        <Grid divided='vertically'>
    		<Grid.Row columns={2}>

     		 <Grid.Column>
        		<p style={{ fontSize: '1.33em', paddingLeft: '3em', textAlign: 'left'}}>
                Begin exploring now, by clicking on one of the many cities listed below. On each page, you will find community-generated photos and videos telling you what (and what not to) do based on their experiences in that city!
                </p>
      		</Grid.Column>
      		<Grid.Column>
        		<p style={{ fontSize: '1.33em', textAlign: 'left', paddingRight:'3em' }}>
                  New cities are being added all the time, as we are able to generate more content based on your suggestions and submitted photos and videos. Check back often, and don't forget to submit your own travel experiences.
                </p>
      		</Grid.Column>

    		</Grid.Row>
    	</Grid>
    	</Container>

    	<Container style={{ paddingBottom: '3em' }}>
    	<Grid>
    	  <Grid.Row>
      		<Grid.Column width={4}>
        	  <Image src='https://static.pexels.com/photos/213407/pexels-photo-213407.jpeg' />
        	  <Divider hidden />
        	  <Image src='https://static.pexels.com/photos/273037/pexels-photo-273037.jpeg' />
      		</Grid.Column>
      		<Grid.Column width={4}>
        	  <Image src='https://static.pexels.com/photos/281502/pexels-photo-281502.jpeg' />
        	  <Divider hidden />
        	  <Image src='https://static.pexels.com/photos/190178/pexels-photo-190178.jpeg' />
      		</Grid.Column>
      		<Grid.Column width={8}>
        	  <Image src='https://static.pexels.com/photos/211357/pexels-photo-211357.jpeg' />
      		</Grid.Column>
    		</Grid.Row>

	     <Grid.Row>
	      <Grid.Column width={4}>
	        <Image src='https://static.pexels.com/photos/208901/pexels-photo-208901.jpeg' />
	        <Divider hidden />
	        <Image src='https://static.pexels.com/photos/227417/pexels-photo-227417.jpeg' />
	      </Grid.Column>
	      <Grid.Column width={8}>
	        <Image src='https://static.pexels.com/photos/193478/pexels-photo-193478.jpeg' />
	      </Grid.Column>
	      <Grid.Column width={4}>
	        <Image src='https://static.pexels.com/photos/547494/pexels-photo-547494.jpeg' />
	        <Divider hidden />
	        <Image src='https://static.pexels.com/photos/288929/pexels-photo-288929.jpeg' />
	      </Grid.Column>
	     </Grid.Row>
	  </Grid>
      </Container>

        <Segment inverted vertical style={{ padding: '2em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Header inverted as='h4' content='© 2017 TrotSeePost. All Rights Reserved.' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

      </div>
    )
  }
}