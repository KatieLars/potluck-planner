import React, {Component} from 'react'
import {Button, CardHeader, Card, CardLink, CardFooter} from 'reactstrap'
import RecipeCard from '../components/recipeCard'
class RecipePotluck extends Component {

  render() {
    let bottom = null
    let top = null
//bottom
     if(this.props.recipe.claimant_id == this.props.user.id) {
       bottom = <Button onClick={(event) => {this.deleteUserFromPotluckRecipe(event)}}>Fine. Reject Me.</Button>
     }else if(this.props.recipe.claimant_id != null) {
       bottom =  <strong>I am Taken!</strong>
     }else{
       bottom = <Button onClick{(event) => this.cookRecipe(event)}>Cook Me!</Button>
     }
//top
     if this.props.recipe.recipe.user_id == this.props.user.id) {
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