import React, {Component} from 'react'
import { CardLink, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class HostPotluckShowCard extends Component {

  createARecipe(event){ //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
  }

  selectRecipes(event) {//DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/select`)
  }

  inviteGuests(event) { //invite guests from friends
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests/invite`)
  }

  getGuests(event) { //gets guests and sorts them according to rsvp
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests`)
  }

  updatePotluck(event) { //update basic potluck info
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/edit`)
  }

  cancelPotluck(event) {
    event.preventDefault()
    //should go directly to API and cancel potluck
  }

  render() {
    return (
      <Card style={subtitleStyle} >
        <CardHeader className="col d-flex justify-content-center">
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updateGuestList(event)}>Update Guest List</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</CardLink>
        </CardHeader>
        <CardImg top width="100%" src={this.props.potluck.image} alt="Potluck Image" />
        <CardBody>
          <CardTitle>{this.props.potluck.name}</CardTitle>
          <CardSubtitle style={{fontSize: "0.7em"}}>{this.props.potluck.format_date}</CardSubtitle>
          <CardText>
            <p></p>
            <p><em>{this.props.potluck.format_time}</em></p>
            <p>Location: {this.props.potluck.location}</p>
            {this.props.potluck.description}
          </CardText>
        </CardBody>
        <CardFooter className="col d-flex justify-content-center">
          <span>
            <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</CardLink>
            <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.createARecipe(event)} >Create Recipe</CardLink>
          </span>
          <span>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</CardLink>
          </span>
        </CardFooter>
      </Card>
    )
  }
}

export default HostPotluckShowCard
