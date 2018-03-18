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

class PotluckCard extends Component {

potluckShowPage(event){ //opens show page DONE
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}`)
}

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

dynamicElements() {
  let header = null
  let footer = null

switch(this.props.user.id == this.props.potluck.user_id){
  case true: //if user is the same as creator of potluck
    return {
      header: <CardHeader className="col d-flex justify-content-center">
                <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updateGuestList(event)}>Update Guest List</CardLink>
                <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</CardLink>
              </CardHeader>,
    }
  case false: //if user is a guest, not the host need RSVP option
    const guestship = this.props.user.guestships.find(guestship => {
      guestship.potluck_id == this.props.potluck.id
    }) //shows guestship
    if(guestship.rsvp){
      return {
        header:
          <CardHeader className="col d-flex justify-content-center">
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.changeRSVP(event)}>RSVP{guestship.rsvp ? (: guestship.rsvp) : (null)}</CardLink>
          </CardHeader>
        }
      }
    }
  }

//should read rsvp if user is potluck user
//props url determines if displayed on potluck index page (url) or potluck show page (no url)
  render() {
    return (
      <Card style={subtitleStyle} >
      {this.props.url ? ( //rendering on index page
        null
      ):( {this.dynamicElements().header} //rendering on potluckShow
      )}
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
            {this.props.url ? (
              <CardFooter>
                <Button onClick={(event)=> this.potluckShowPage(event)}>More Info</Button>
              </CardFooter>
            ) : (
              <CardFooter className="col d-flex justify-content-center">
                  <span>
                    <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</CardLink>
                    <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.createARecipe(event)} >Create Recipe</CardLink>
                    <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</CardLink>
                    <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</CardLink>
                  </span>
              </CardFooter>
            )}
      </Card>
    )
  }
}

export default PotluckCard
