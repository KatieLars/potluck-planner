import React, {Component} from 'react'
import {FormGroup, Label, Input} from 'reactstrap'

//rendered in:
  //RecipeModal
    //update recipe from recipe index
    //update recipe from potluck show
    //create recipe from potluck show
  //NewRecipePage
//can take a recipe as props for placeholder values
class RecipeForm extends Component {
  debugger
  isChecked(difficulty) {
    this.props.recipe ? (`this.props.recipe.${difficulty}` == "easy" ? (true) : (false)) : (null)
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder={this.props.recipe ? (this.props.recipe.name) : (null)} />
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label>Difficulty: </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check active={this.isChecked("easy")}>
          <Input type="radio" name="difficulty" value="easy" />
          Easy
          </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check active={this.props.recipe ? (this.props.recipe.difficulty == "moderate" ? (true) : (false)) : (null)}>
          <Input type="radio" name="difficulty" value="moderate" />
          Moderate
          </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check active={this.props.recipe ? (this.props.recipe.difficulty == "hard" ? (true) : (false)) : (null)}>
          <Input type="radio" name="difficulty" value="hard" />
          Hard
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="url">URL:</Label>
          <Input type="text" name="url" id="url" placeholder={this.props.recipe ? (this.props.recipe.url) : (null)} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" id="image" placeholder={this.props.recipe ? (this.props.recipe.image) : (null)}/>
        </FormGroup>
      </div>
    )
  }

}

export default RecipeForm
