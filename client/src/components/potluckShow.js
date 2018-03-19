import React, {Component} from 'react'
import { CardLink, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import GuestPotluckShowCard from './guestPotluckShowCard'
import HostPotluckShowCard from './hostPotluckShowCard'

class PotluckShow extends Component {

  guestOrHost() {
    //if user id is equal to the owner of the potluck id
    if(this.props.user.id == this.props.potluck.user_id) { //host
      return <HostPotluckShowCard potluck={this.props.potluck} user={this.props.user}/>
    }else {//guets
      const guestship = this.props.potluck.guestships.find(guestship => {
        return guestship.guest_id == this.props.user.id
      })
      return <GuestPotluckShowCard potluck={this.props.potluck} user={this.props.user} guestship={guestship}/>
    }
  }

  render() {
    return (
      <div>
        {this.guestOrHost()}
      </div>
    )
  }
}

export default PotluckShow
