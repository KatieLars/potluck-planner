import React, { Component } from 'react'
import {Button, FormGroup, Input, Label, CardDeck} from 'reactstrap'
import RecipeCard from '../components/recipeCard'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}
//Prop: current_potluck
//recipe_with_claimant_id : {recipe: RECIPE OBJECT, potluck_recipe: CORRESPONDING POTLUCK RECIPE}
class RecipesList extends Component {

recipesCards() {
  return this.props.recipes.map((recipe) => (
    <RecipeCard recipe={recipe} currentPotluck={this.props.currentPotluck} potlucks={this.props.potlucks} />
  )
)}


  render() {
    return (
      <CardDeck style={cardDecks}>
        {this.recipeCards()}
      </CardDeck>
    )
  }
}

export default RecipesList
