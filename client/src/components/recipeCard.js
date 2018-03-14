import React, {Component} from 'react'
import { CardLink, Row, Col, Card, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import Link from 'react-router-dom'

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

deleteUserFromPotluckRecipe(event) {
  event.preventDefault()
  //api call that deletes user_id from potluckRecipe
}

currentPotluck() {
  if(this.props.currentPotluck) {
    this.claimedRecipe()
  }else{
    this.recipeInfo()
  }
}

claimedRecipe() { //for currentPotluck
  //if potluckRecipes exists and current user id is the same as user_id (user has claimed)
  if(this.props.potluckRecipe && this.props.potluckRecipe.userId == this.props.user.id) {
    return(
      <CardFooter>
        <Button onClick={(event) => {this.deleteUserFromPotluckRecipe(event)}}>Fine. Reject Me.</Button>
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
        <strong>You brought this to {this.potluckLink()}</strong>
      </CardFooter>
  )}
}

potluckLink() {
  //needs to find potluck in state based on potluckRecipe id given in props
  //const foundPotluck = this.props.potlucks.find(potluck => {
  //return potluck.id == this.props.potluckRecipe.potluck_id})
//})
  //<Link to="/potlucks/${foundPotluck.id}">{foundPotluck.name}</Link>
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
        <CardImgOverlay src={this.props.recipe.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {this.props.recipe.difficulty}</CardSubtitle>
            <CardText>
              <p></p>
              <CardLink href=`${this.props.recipe.url}`>Get Recipe</CardLink>
            </CardText>
            {this.currentPotluck()}
          </CardBody>
      </Card>
    )
  }
}

export default PotluckCard
