import React, { Component } from 'react'
import {Button, FormGroup, Input, Label} from 'reactstrap'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}
//recipe_with_claimant_id : {recipe: RECIPE OBJECT, potluck_recipe: CORRESPONDING POTLUCK RECIPE}
class RecipesList extends Component {

recipesCards() {
  return this.props.recipes.map((recipe) => (
    <RecipeCard recipe={recipe}/>
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

export default FriendsList
