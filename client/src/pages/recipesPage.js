import React, {Component} from 'react'
import { Button, Container, Col, Row, CardColumns} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as recipesActions from '../actions/recipesActions'
import RecipesList from '../containers/recipesList'
import stillLife from '../images/stillLife.jpg'

const homeBackground = {
  backgroundImage: "url(" + stillLife + ")",
  height: "100vh",
  textAlign: "center"
}

class RecipesPage extends Component {

componentWillMount() {
  this.props.actions.getRecipes()
}

shouldComponentUpdate(nextProps, nextState) { 
  return(this.props.recipes !== nextProps.recipes)
 }

handleClick(event) {
  event.preventDefault()
  history.push("/recipes/new")
}

  render() {
    if(this.props.recipes.allRecipes[0]) {
      return(
        <div >
          <h3>New-to-You Recipes</h3>
          <RecipesList recipes={this.props.recipes.userRecipes.newRecipes} url={this.props.match.url} />
          <hr className="my-4"/>
          <h3>Cooked Recipes</h3>
          <RecipesList recipes={this.props.recipes.userRecipes.cookedRecipes} url={this.props.match.url} />
        </div>
      )
    }else{
      return(
        <div>
          <h1>No Recipes!</h1>
          <Button onClick={(event) => this.handleClick(event)}>Create a Recipe</Button>
        </div>
      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(recipesActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.recipes) {
    return {
      recipes: state.recipes
    }
  }else{
    return{
      state
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
