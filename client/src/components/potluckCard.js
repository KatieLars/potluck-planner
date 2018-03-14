import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
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

potluckShowPage(event){ //opens show page
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}`)
}

createARecipe(event){
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
}

selectRecipes(event) {
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/recipes/select`)
}

inviteGuests(event) {
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/guests/invite`)
}

getGuests(event) {
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/guests`)
}

getPotluckAttendees(event) {
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/attendees`)
}

  render() {
    return (
      <Card style={subtitleStyle} >
      {this.props.url ? (
        null
      ):(
        <CardHeader className="col d-flex justify-content-center">
          <Navbar nav >
            <Nav navbar >
              <span>
                <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.getGuests(event)}>Guest List</NavLink>
                <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</NavLink>
              </span>
            </Nav>
          </Navbar>
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
            {this.props.url ? (
              <CardFooter>
                <Button onClick={(event)=> this.potluckShowPage(event)}>More Info</Button>
              </CardFooter>
            ) : (
              <CardFooter className="col d-flex justify-content-center">
              <Navbar nav >
                <Nav navbar >
                  <span><NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</NavLink>
                  <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.createARecipe(event)} >Create a Recipe</NavLink></span>
                </Nav>
              </Navbar>
              </CardFooter>
            )}
          </CardBody>
      </Card>
    )
  }
}


export default PotluckCard
