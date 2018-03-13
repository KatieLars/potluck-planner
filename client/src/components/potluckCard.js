import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem} from 'reactstrap'
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

handleClick(event){ //opens show page
  event.preventDefault()
  history.push(`potlucks/${this.props.potluck.id}`)
}

  render() {
    debugger
    return (
      <Card style={subtitleStyle} >
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
              <CardHeader>
                <Nav pills>
                  <NavItem>Invite Guests</NavItem>
                  <NavItem>See Who Is Coming</NavItem>
                  <NavItem>Suggest Recipes</NavItem>
                  <NavItem>Create a Recipe</NavItem>
                </Nav>
              </CardHeader>
            )}
          </CardBody>
      </Card>
    )
  }
}


export default PotluckCard
