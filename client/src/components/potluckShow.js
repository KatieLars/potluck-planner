import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'
import {Container, Row, Col, Button, CardDeck} from 'reactstrap'
import history from '../history'
import RecipesList from '../containers/recipesList'

const imageStyle ={
  height: "30%",
  paddingBottom: "20px"
}

const containerStyle = {
  marginLeft: "50px",
  marginRight: "50px"
}

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}

class PotluckShow extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const newPotluck = nextProps.potlucks.potlucks.find(potluck => {
      return potluck.id == this.props.potluck.id
    })
    return(this.props.potluck !== newPotluck)
  }

  render() {
    return (
      <div>
        <Container style={containerStyle}>
          <Row style={{paddingTop: "25px"}}>
            <CardDeck style={cardDecks}>
              <PotluckCard potluck={this.props.potluck}/>
              <RecipesList recipes={this.props.potluck.potluck_recipes_claimed} currentPotluck={this.props.potluck} />
            </CardDeck>
          </Row>
        </Container>
      </div>
    )
  }
}
//when a recipe is added to potluck, it is a potluck recipe.
//if the recipe is chosen it gets a user id

const mapStateToProps = (state, ownProps) => {
  if(state.potlucks.potlucks){
    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.id
    })
    return {potluck: potluck}
  }else{
    return {
      state
    }
  }
}

export default connect(mapStateToProps, null)(PotluckShow)
