import React, {Component} from 'react'
import {Card, CardFooter, CardHeader, CardLink } from 'reactstrap'
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

class RecipeIndex extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      recipe_id: this.props.recipe.id
    }
  }

  editRecipe(event) {
    event.preventDefault()
    history.push(`/recipes/${this.props.recipe.id}/edit`)
  }

  deleteRecipe(event) {
    event.preventDefault()
    this.props.actions.deleteRecipe(this.state)
  }

  render() {
    let top = null
    if (this.props.recipe.user_id == this.props.user.id) {
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
        <RecipeCard recipe={this.props.recipe}/>
        <CardFooter></CardFooter>
      </Card>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(recipesActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(RecipeIndex)
