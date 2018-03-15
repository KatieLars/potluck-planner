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

potluckLink() {
  //needs to find potluck in state based on potluckRecipe id given in props
  //const foundPotluck = this.props.potlucks.find(potluck => {
  //return potluck.id == this.props.potluckRecipe.potluck_id})
//})
  //<Link to="/potlucks/${foundPotluck.id}">{foundPotluck.name}</Link>
}


  render() {
    let bottom = null

    if(this.props.currentPotluck) {
      if(this.props.recipe && this.props.recipe.claimant_id == this.props.user.id) {
        bottom = <Button onClick={(event) => {this.deleteUserFromPotluckRecipe(event)}}>Fine. Reject Me.</Button>
      }else if(this.props.recipe && this.props.recipe.claimant_id != null) {
        bottom =  <strong>I am Taken!</strong>
      }
    }else{
      if(this.props.recipe && this.props.recipe.claimant_id == this.props.user.id)
        bottom = <strong>You brought this to {this.potluckLink()}</strong>
    }


    return (
      <Card style={subtitleStyle} >
      {(this.props.recipe.recipe.user_id == this.props.user.id) ? (
          <CardHeader className="col d-flex justify-content-center">
            <CardLink href="#"  style={{display: "inline-block"}} onClick={(event) => this.editRecipe(event)} >Edit Recipe</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.deleteRecipe(event)}>Delete Recipe</CardLink>
          </CardHeader>
        ):(
          <CardHeader>
          </CardHeader>
        )
      }
        <CardImg top width="100%" src={this.props.recipe.recipe.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.recipe.recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {this.props.recipe.recipe.difficulty}</CardSubtitle>
            <CardLink href={this.props.recipe.recipe.url}>Get Recipe</CardLink>
          </CardBody>
          <CardFooter>
            {bottom}
          </CardFooter>
      </Card>
    )
  }
}

export default RecipeCard