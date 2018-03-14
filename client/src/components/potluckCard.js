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

createARecipe(event){ //creates a recipe
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
}

selectRecipes(event) {//select a recipe--creates potluck recipe
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
      {this.props.url ? (
        null
      ):(
        <CardHeader className="col d-flex justify-content-center">
          <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.getGuests(event)}>Guest List</CardLink>
          <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</CardLink>
        </CardHeader>
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
//className="col d-flex justify-content-center"
//style={{display: "inline-block"}}
// <Navbar nav >
//   <Nav navbar >
//     <span>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</NavLink>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.createARecipe(event)} >Create a Recipe</NavLink>
//     </span>
//     <span>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</NavLink>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</NavLink>
//     </span>
//   </Nav>
// </Navbar>

// <Navbar nav >
//   <Nav navbar >
//     <span>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.getGuests(event)}>Guest List</NavLink>
//       <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</NavLink>
//     </span>
//   </Nav>
// </Navbar>
