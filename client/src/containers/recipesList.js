import React, { Component } from 'react'
import {Button, FormGroup, Input, Label, CardDeck} from 'reactstrap'
import RecipePotluck from './recipePotluck'
import RecipeIndex from './recipeIndex'
import {connect} from 'react-redux'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}

class RecipesList extends Component {

recipeCards() {
  if(this.props.currentPotluck){
    return this.props.recipes.map((recipe) => (
      <RecipePotluck recipe={recipe} currentPotluck={this.props.currentPotluck} potlucks={this.props.potlucks} user={this.props.user} />
    ))
  }else{
    return this.props.recipes.map((recipe) => (
      <RecipeIndex recipe={recipe} user={this.props.user}/>
    ))
  }
}

  render() {
    return (
      <div>
        {this.recipeCards()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {//make this conditional if no potlucks
  if(state.potlucks.potlucks) {
    return {
      user: state.users.user,
      potlucks: state.potlucks.potlucks
    }
  }else{
    return {
      user: state.users.user
    }
  }
}

export default connect(mapStateToProps, null)(RecipesList)
