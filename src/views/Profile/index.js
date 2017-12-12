import { Button, Grid, Header, Icon, Image, Menu } from 'semantic-ui-react'
import React, { Component } from 'react'
import LeftPanel from '../Layout/LeftPanel'
import MapHeader from '../Layout/Map'
import MainHeader from '../Layout/MainHeader'
import UserPost from '../UserPost'
import SearchHome from '../SearchHome'
import { Route, Link } from 'react-router-dom'


export default class Profile extends Component {

  render() {
    return (
      <div>
      	<LeftPanel/>
      </div>

    )
  }
}
