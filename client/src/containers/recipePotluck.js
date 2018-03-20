import React, {Component} from 'react'
import {Button, CardHeader, Card, CardLink, CardFooter} from 'reactstrap'
import RecipeCard from '../components/recipeCard'
import history from '../history'
import * as recipesActions from '../actions/recipesActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class RecipePotluck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe_id: this.props.recipe.recipe.id,
      potluck_id: this.props.currentPotluck.id,
      user_id: this.props.user.id
    }
  }

  editRecipe(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.currentPotluck.id}/recipes/${this.props.recipe.recipe.id}/edit`)
  }

  deleteRecipe(event) {
    event.preventDefault()
    this.props.actions.deleteRecipe(this.state)
  }

  claimOrUnclaimPotluckRecipe(event) {
    event.preventDefault()
    this.props.actions.claimRecipe(this.state)
  }

  render() {

    let bottom = null
    let top = null
//bottom
     if(this.props.recipe.claimant_id == this.props.user.id) {
       bottom = <Button onClick={(event) => {this.claimOrUnclaimPotluckRecipe(event)}}>Fine. Reject Me.</Button>
     }else if(this.props.recipe.claimant_id != null) {
       bottom =  <strong>I am Taken!</strong>
     }else{
       bottom = <Button onClick={(event) => this.claimOrUnclaimPotluckRecipe(event)}>Cook Me!</Button>
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
        <RecipeCard recipe={this.props.recipe.recipe} currentPotluck={this.props.currentPotluck}/>
        <CardFooter>
          {bottom}
        </CardFooter>
      </Card>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(recipesActions, dispatch)
  }
}

export default  connect(null, mapDispatchToProps)(RecipePotluck)
