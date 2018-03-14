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

currentPotluck() {
  if(this.props.currentPotluck) {
    this.claimedRecipe()
  }else{
    this.recipeInfo()
  }
}
//needs to work with regular recipes index and potluckrecipes
claimedRecipe() { //call if recipe card is associated with current potluck
  //if potluckRecipes exists and current user id is the same as user_id (user has claimed)
  if(this.props.potluckRecipe && this.props.potluckRecipe.userId == this.props.user.id) {
    return(
      <CardFooter>
        <Button>Fine. Reject Me.</Button>
      </CardFooter>
  )}else if(this.props.potluckRecipe && this.props.potluckRecipe.userId != null){
    return(
      <CardFooter className="col d-flex justify-content-center">
        <strong>I am Taken!</strong>
      </CardFooter>
  )}
}

recipeInfo() {
  if(this.props.potluckRecipe && this.props.potluckRecipe.userId == this.props.user.id) {//any user potluck recipes match this recipe
    return(
      <CardFooter className="col d-flex justify-content-center">
        <strong>You brought this to </strong><Link>{POTLUCK NAME}</Link>
      </CardFooter>
  )}
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
            {this.currentPotluck()}
          </CardBody>
      </Card>
    )
  }
}

export default PotluckCard
