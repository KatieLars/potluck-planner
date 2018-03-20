import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RecipeForm from '../components/recipeForm'
import * as recipesActions from '../actions/recipesActions'
import history from '../history'

class RecipeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newRecipe: {
        name: "",
        difficulty: "",
        url: "",
        image: "",
        id: this.props.recipe ? (this.props.recipe.id) : "",
        potluck_id: this.props.match.params.potluckId ? (this.props.match.params.potluckId) : ""
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
  if(ownProps.match.params.potluckId){
    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.potluckId
    })
     const recipe = state.potlucks.allPotluckRecipes.find(recipe => {
      return recipe.id == ownProps.match.params.recipeId
    })
        if(recipe && potluck){
          return {
            recipe: recipe,
            currentPotluck: potluck,
            user: state.users.user,
          }}else{
              return{user: state.users.user}
            }
          }else if(ownProps.match.params.recipeId){
              const recipe = state.recipes.allRecipes.find(recipe => {
                return recipe.id == ownProps.match.params.recipeId
              })
              if(recipe){
                return {
                  recipe: recipe,
                  user: state.users.user}
              }else{
                return{user: state.users.user}
              }
          }else{
            return {
              user: state.users.user
            }
          }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(recipesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal)
