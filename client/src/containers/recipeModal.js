import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RecipeForm from '../components/recipeForm'
import * as recipesActions from '../actions/recipesActions'
import history from '../history'
//this modal can be called to:
//   create a recipe from potluck show page
//   update a recipe from potluck show page
//   update a recipe from recipe index page
//
//this modal should call the Recipe form component, but have a button to update
class RecipeModal extends Component {
  constructor(props) { //remeber to handle null values in api call for update
    super(props)
    this.state = {
      newRecipe: {
        userId: this.props.user.id,
        name: "",
        difficulty: "",
        url: "",
        image: "",
        id: this.props.recipe ? (this.props.recipe.id) : ""
        potluckId: this.props.currentPotluck ? (this.props.currentPotluck.id) : ""
      }
    }
  }

  handleChange(event){
    const field = event.target.name;
    const newRecipe = this.state.newRecipe;
    newRecipe[field] = event.target.value;
    return this.setState({newRecipe: newRecipe})
  }

  createRecipeHandler(event) {
    event.preventDefault()
    this.props.actions.createRecipe(this.state.newRecipe);
  }

  updateRecipeHandler(event) {
    event.preventDefault()
    this.props.actions.updateRecipe(this.state.newRecipe)
    if(this.props.currentPotluck) {
      history.push(`/potlucks/${this.props.currentPotluck.id}`)
    }else {
      history.push('/recipes')
    }
  }

  render() {
    let lastButton = null

    if(this.props.recipe) {
      lastButton = <Button onClick={(event) => this.updateRecipeHandler(event)}>Update Recipe</Button>
    }else{
      lastButton = <Button onClick={(event) => this.createRecipeHandler(event)}>Create Recipe</Button>
    }

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <RecipeForm recipe={this.props.recipe ? (this.props.recipe) : (null)}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            {lastButton}
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //START HERE: PROBLEM WITH UPDATING RECIPE(RECIPE NOT FOUND)
  if(state.recipes.allRecipes[0]){ //if coming from index page or has recipes available
     const recipe = state.recipes.allRecipes.find(recipe => {
      return recipe.id == ownProps.match.params.id
    })
    if(recipe){
      return {recipe: recipe, user: state.users.user}
    }else{
      return {user: state.users.user}
    }
  }else{
    return {
      user: state.users.user
    }
  }
}
//problem: getting recipe info from params if accessed from potluck showpage
const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(recipesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal)
