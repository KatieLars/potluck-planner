import React, {Component} from 'react'
import { CardLink, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
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
  //recipe recipe list is updated if this happens
}

deleteUserFromPotluckRecipe(event) {
  event.preventDefault()
  //api call that deletes user_id from potluckRecipe
  //make sure that recipe list is updated if this happens
}

currentPotluck() {
  if(this.props.currentPotluck) {

    this.claimedRecipe()
  }else{
    this.recipeInfo()
  }
}
//when we get recipes for potlucks, I want all recipes to be formatted the same
claimedRecipe() { //for currentPotluck--should test that a recipe is taken or not by the user
  debugger
  //if potluckRecipes exists and current user id is the same as claimant_id (user has claimed)
  if(this.props.recipe && this.props.recipe.claimant_id == this.props.user.id) {
    return(
      <CardFooter>
        <Button onClick={(event) => {this.deleteUserFromPotluckRecipe(event)}}>Fine. Reject Me.</Button>
      </CardFooter>
  )}else if(this.props.potluckRecipe && this.props.recipe.claimant_id != null){
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
      {(this.props.recipe.user_id == this.props.user.id) ? (
          <CardHeader className="col d-flex justify-content-center">
            <CardLink href="#"  style={{display: "inline-block"}} onClick={(event) => this.editRecipe(event)} >Edit Recipe</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.deleteRecipe(event)}>Delete Recipe</CardLink>
          </CardHeader>
        ):(
          <CardHeader>
          </CardHeader>
        )
      }
        <CardImg top width="100%" src={this.props.recipe.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {this.props.recipe.difficulty}</CardSubtitle>
            <CardLink href={this.props.recipe.url}>Get Recipe</CardLink>
          </CardBody>
        {this.currentPotluck()}
      </Card>
    )
  }
}

export default RecipeCard
