import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink} from 'reactstrap'
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
        <CardHeader>
          <Nav pills className="inline">
            <NavItem><NavLink href="#">Invite Guests</NavLink></NavItem>
            <NavItem><NavLink href="#">See Who Is Coming</NavLink></NavItem>
          </Nav>
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
              <CardFooter>
                <Nav pills>
                  <NavItem><NavLink href="#">Suggest Recipes</NavLink></NavItem>
                  <NavItem><NavLink href="#">Create a Recipe</NavLink></NavItem>
                  </Nav>
              </CardFooter>
            )}
          </CardBody>
      </Card>
    )
  }
}


export default PotluckCard
