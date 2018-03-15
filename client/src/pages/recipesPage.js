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
//index page for all user recipes
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

  render() {
    if(this.props.recipes) {
      return(
        <div style={homeBackground}  >
          <RecipesList recipes={this.props.recipes} url={this.props.match.url} />
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
  if(state.recipes){
    return {
      recipes: state.recipes.recipes
    }}else {
      return {
        state
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
