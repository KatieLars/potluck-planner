import React, {Component} from 'react'
import {FormGroup, Label, Input} from 'reactstrap'

const RecipeForm = ({ recipe }) => {
    return (
      <div>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder={recipe ? (recipe.name) : (null)} />
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label>Difficulty: </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check >
          <Input type="radio" name="difficulty" value="easy" />
          Easy
          </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check>
          <Input type="radio" name="difficulty" value="moderate" />
          Moderate
          </Label>
        </FormGroup>
        <FormGroup check className="form-check-inline">
          <Label check >
          <Input type="radio" name="difficulty" value="hard" />
          Hard
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="url">URL:</Label>
          <Input type="text" name="url" id="url" placeholder={recipe ? (recipe.url) : (null)} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" id="image" placeholder={recipe ? (recipe.image) : (null)}/>
        </FormGroup>
      </div>
    )
}

export default RecipeForm
