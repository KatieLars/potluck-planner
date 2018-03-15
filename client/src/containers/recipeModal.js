import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button}
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RecipeForm from '../components/recipeForm'
//this modal can be called to:
//   create a recipe from potluck show page
//   update a recipe from potluck show page
//   update a recipe from recipe index page
//
//this modal should call the Recipe form component, but have a button to update
class RecipeModal extends Component {
  render() {
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <RecipeForm recipe={this.props.recipe ? (this.props.recipe) : (null)}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.updateRecipeHandler(event)}>Update Recipe</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

//need map state to props to get recipe. State will be conditional because button could
//be pushed from recipeIndex (state.recipe.recipes) or from RecipeIndex, which involves claimaint_id
//Will have to use OwnProps to get single recipe information from params

export default RecipeModal