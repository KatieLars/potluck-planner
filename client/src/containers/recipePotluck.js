import React, {Component} from 'react'
import {Button, CardHeader, Card, CardLink, CardFooter} from 'reactstrap'
import RecipeCard from '../components/recipeCard'
import history from '../history'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class RecipePotluck extends Component {

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

  cookRecipe(event) {
    event.preventDefault()
    //adds user_id to correct potluck_recipe and re-renders the potluck show page
  }

  render() {
    let bottom = null
    let top = null
//bottom
     if(this.props.recipe.claimant_id == this.props.user.id) {
       bottom = <Button onClick={(event) => {this.deleteUserFromPotluckRecipe(event)}}>Fine. Reject Me.</Button>
     }else if(this.props.recipe.claimant_id != null) {
       bottom =  <strong>I am Taken!</strong>
     }else{
       bottom = <Button onClick={(event) => this.cookRecipe(event)}>Cook Me!</Button>
     }
//top
     if (this.props.recipe.recipe.user_id == this.props.user.id) {
       top = (
       <CardHeader className="col d-flex justify-content-center">
         <CardLink href="#"  style={{display: "inline-block"}} onClick={(event) => this.editRecipe(event)} >Edit Recipe</CardLink>
         <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.deleteRecipe(event)}>Delete Recipe</CardLink>
       </CardHeader>
     )}else {
       top = <CardHeader></CardHeader>
     }

    return(
      <Card style={subtitleStyle} >
          {top}
        <RecipeCard recipe={this.props.recipe.recipe}/>
        <CardFooter>
          {bottom}
        </CardFooter>
      </Card>
    )
  }

}

export default RecipePotluck
