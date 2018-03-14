import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'
import {Container, Row, Col, Button} from 'reactstrap'
import history from '../history'
import RecipesList from '../containers/recipesList'

const imageStyle ={
  height: "30%",
  paddingBottom: "20px"
}

const containerStyle = {
  marginLeft: "100px",
  marginRight: "100px"
}

class PotluckShow extends Component {

  render() {
    return (
      <div>
        <Container style={containerStyle}>
          <Row style={{paddingTop: "25px"}}>
            <Col className="col-3">
              <PotluckCard potluck={this.props.potluck}/>
            </Col>
            <Col className="col-9">
              <RecipesList recipes={this.props.potluckRecipes}/>
            </Col>
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


// <Button onClick={(event) => {this.inviteGuests(event)}}>Invite Guests</Button>
// <Button onClick={(event) => {this.getAttendees(event)}}>See Who is Coming</Button>
