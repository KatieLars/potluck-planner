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
        id: this.props.recipe ? (this.props.recipe.id) : "",
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
    event.preventDefault() //potluckID falls off here
  
    this.props.actions.updateRecipe(this.state.newRecipe)
    // if(this.props.match.params.potluckId) {
    //   debugger //problem is here--remember this can occur after the api call and state adjestument
    //   //move to actions
    //   history.push(`/potlucks/${this.props.match.params.potluckId}`)
    // }else {
    //   history.push('/recipes')
    // }
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
  if(state.recipes.allRecipes[0] && state.potlucks.potlucks[0] == null || state.recipes.allRecipes[0] ){ //if coming from index page
     const recipe = state.recipes.allRecipes.find(recipe => {
      return recipe.id == ownProps.match.params.recipeId
    })
      const potluck = state.potlucks.potlucks.find(potluck => {
        return potluck.id == ownProps.match.params.potluckId
      })
    if(recipe && potluck){
      return {
        recipe: recipe,
        currentPotluck: potluck,
        user: state.users.user,
      }}else if(recipe){
      return {
        recipe: recipe,
        user: state.users.user}
      }else{
        return{user: state.users.user}
      }
  }else if(state.potlucks.potlucks[0] && state.recipes.allRecipes[0] == null || state.potlucks.potlucks[0] ){ //if coming from potluckShow page

    const potluckRecipe = state.potlucks.allPotluckRecipes.find(recipe => {
      return recipe.id == ownProps.match.params.recipeId
    })
      const potluckPotluck = state.potlucks.potlucks.find(potluck => {
        return potluck.id == ownProps.match.params.potluckId
      })
    if(potluckRecipe && potluckPotluck){
      return{
        recipe: potluckRecipe,
        currentPotluck: potluckPotluck,
        user: state.users.user
      }
    }else{
      return{
        user: state.users.user
      }
    }
  }
  else{
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
