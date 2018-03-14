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
//props are hash with 2 values: recipe (recipe object) and potluckRecipe(corresponding potluckRecipe)
class RecipeCard extends Component {

editRecipe(event) {
  event.preventDefault()
  history.push(`/recipes/${this.props.recipe.id}/edit`)
}

deleteRecipe(event) {
  event.preventDefault()
  //direct API delete, and pushes back to recipe index page
}

  render() {
    return (
      <Card style={subtitleStyle} >
      {this.props.recipe.userId == this.props.user.id ? (
        <CardHeader className="col d-flex justify-content-center">
          <Navbar nav >
            <Nav navbar >
              <span>
                <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.editRecipe(event)}>Edit Recipe</NavLink>
                <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.deleteRecipe(event)}>Delete Recipe</NavLink>
              </span>
            </Nav>
          </Navbar>
        </CardHeader>
      ):(
        null
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
                  <span>
                    <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</NavLink>
                    <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.createARecipe(event)} >Create a Recipe</NavLink>
                  </span>
                  <span>
                    <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck/NavLink>
                    <NavLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</NavLink>
                  </span>
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
