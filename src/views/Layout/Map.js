import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Image, Container, Segment, Header } from 'semantic-ui-react'

const ContainerStyle = {
	borderWidth: '2px',
	borderStyle:'solid',
	height:'3em',
}

const MapHeader = props => {
 
 	return ( 
 		<Container style={ContainerStyle}>
			
			<Image src={'https://static.pexels.com/photos/346696/pexels-photo-346696.jpeg'}
				style={{backgroundSize:'cover'}}/>
		</Container>
	)
}

export default MapHeader;