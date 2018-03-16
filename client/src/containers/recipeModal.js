import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RecipeForm from '../components/recipeForm'
import * as recipesActions from '../actions/recipesActions'
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
        user_id: this.props.user.id,
        name: "",
        difficulty: "",
        url: "",
        image: ""
      }
    }
  }

  handleChange(event){
    const field = event.target.name;
    const newRecipe = this.state.recipe;
    newRecipe[field] = event.target.value;
    return this.setState({newRecipe: newRecipe})
  }

  createRecipeHandler(event) {
    event.preventDefault()
    this.props.actions.createRecipe(this.state.newRecipe);
  }

  updateRecipeHandler(event) {
    event.preventDefault()
    //this.props.actions.updateRecipe(this.state.newRecipe)
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
  if(state.recipes){
    debugger
    const recipe = state.recipes.userRecipes.totalRecipes.find(recipe => {
      return recipe.id == ownProps.match.params.id
    })
    if(recipe){
      return {recipe: recipe}
    }else{
      return state
    }
  }else{
    return {
      state
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(recipesActions, dispatch)
  }
}

//need map state to props to get recipe. State will be conditional because button could
//be pushed from recipeIndex (state.recipe.recipes) or from RecipeIndex, which involves claimaint_id
//Will have to use OwnProps to get single recipe information from params

export default connect(mapStateToProps, null)(RecipeModal)
