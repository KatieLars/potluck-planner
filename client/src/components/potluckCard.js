import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

const navBarStyle = {
  textAlign: "center"
}

class PotluckCard extends Component {

handleClick(event){ //opens show page
  event.preventDefault()
  history.push(`potlucks/${this.props.potluck.id}`)
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
              <span><NavLink href="#" style={{display: "inline-block"}} >Invite Guests</NavLink>
              <NavLink href="#" style={{display: "inline-block"}} >See Who Is Coming</NavLink></span>
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
                <Button onClick={(event)=> this.handleClick(event)}>More Info</Button>
              </CardFooter>
            ) : (
              <CardFooter className="col d-flex justify-content-center">
              <Navbar nav >
                <Nav navbar >
                  <span><NavLink href="#" style={{display: "inline-block"}} >Suggest Recipes</NavLink>
                  <NavLink href="#" style={{display: "inline-block"}} >Create a Recipe</NavLink></span>
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
