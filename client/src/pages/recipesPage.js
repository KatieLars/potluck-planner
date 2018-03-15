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
//index problem: sorting cooked and uncooked recipes
class RecipesPage extends Component {

componentWillMount() {
  this.props.actions.getRecipes()
}

// shouldComponentUpdate(nextProps, nextState) { //true if change of friends
//   return(this.props.potlucks != nextProps.potlucks)
//  }

handleClick(event) {
  event.preventDefault()
  history.push("/recipes/new")
}

  render() { //shows all recipes a user brought or created
    if(this.props.recipes) {
      return(
        <div >
          <h3>New-to-You Recipes</h3>
          <RecipesList recipes={this.props.recipes.newRecipes} url={this.props.match.url} />
          <hr className="my-4"/>
          <h3>Cooked Recipes</h3>
          <RecipesList recipes={this.props.cookedRecipes} url={this.props.match.url} />
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
//
const mapStateToProps = (state) => {
  debugger
      return {
        recipes: state.recipes
      }
  }

//   if(state.users.user){
//
//     return {
//       newRecipes: state.users.user.new_recipes,
//       cookedRecipes: state.users.user.cooked_recipes,
//       user: state.users.user


export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
