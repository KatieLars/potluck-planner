import React, { Component } from 'react'
import {Button, FormGroup, Input, Label, CardDeck} from 'reactstrap'
import RecipeCard from '../components/recipeCard'
import {connect} from 'react-redux'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}

//currentPotluck={this.props.currentPotluck} potlucks={this.props.potlucks}
//Prop: current_potluck
//recipe_with_claimant_id : {recipe: RECIPE OBJECT, potluck_recipe: CORRESPONDING POTLUCK RECIPE}
class RecipesList extends Component {

recipeCards() {
  return this.props.recipes.map((recipe) => (
    <RecipeCard recipe={recipe} currentPotluck={this.props.currentPotluck} potlucks={this.props.potlucks} user={this.props.user} />
  )
)}


  render() {
    return (
      <div>
        {this.recipeCards()}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    potlucks: state.potlucks.potlucks
  }
}

export default connect(mapStateToProps, null)(RecipesList)
