import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckShow from '../components/potluckShow'
import {Container, Row, Col, Button, CardDeck} from 'reactstrap'
import history from '../history'
import RecipesList from '../containers/recipesList'
import stillLife from '../images/stillLife.jpg'
import PrivateRoute from '../privateRoute'
import ListModal from '../containers/listModal'
import PotluckModal from '../containers/potluckModal'
import RecipeModal from '../containers/recipeModal'
import RsvpModal from '../components/rsvpModal'

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

const homeBackground = { //problem here
  backgroundImage: "url(" + stillLife + ")",
  backgroundSize: "cover",
   height: "100vh"
}


class PotluckShowPage extends Component {

  render() {
    return (
      <div style={homeBackground}>
        <Container style={containerStyle}>
          <Row style={{paddingTop: "25px"}}>
            <CardDeck style={cardDecks}>
              <PrivateRoute exact path={`/${this.props.url}/:id/edit`} component={PotluckModal} />
              <PrivateRoute path={`/${this.props.url}/:potluckId/guests/select`} component={ListModal}/>
              <PrivateRoute path={`/${this.props.match.url}/:potluckId/guests/update`} component={ListModal}/>
              <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/guests`} component={ListModal}/>
              <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/recipes/select`} component={ListModal}/>
              <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/:recipeId`} component={RecipeModal} />
              <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/new`} component={RecipeModal}/>
              <PrivateRoute exact path={`/${this.props.match.url}/:id/rsvp`} component={RsvpModal} />
              
              <PotluckShow potluck={this.props.potluck} user={this.props.user} url={this.props.match.url} key={this.props.potluck.id}/>
              <RecipesList recipes={this.props.potluck.potluck_recipes_claimed} currentPotluck={this.props.potluck} />
            </CardDeck>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if(state.potlucks.potlucks){

    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.id
    })
    return {
      potluck: potluck,
      user: state.users.user,
      match: ownProps.match
    }
  }else{
    return {
      state
    }
  }
}

export default connect(mapStateToProps, null)(PotluckShowPage)
//
// <PrivateRoute exact path={`/${this.props.match.url}/:id/edit`} component={PotluckModal} />
// <PrivateRoute path={`/${this.props.match.url}/:potluckId/guests/select`} component={ListModal}/>
// <PrivateRoute path={`/${this.props.match.url}/:potluckId/guests/update`} component={ListModal}/>
// <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/guests`} component={ListModal}/>
// <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/recipes/select`} component={ListModal}/>
// <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/:recipeId`} component={RecipeModal} />
// <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/new`} component={RecipeModal}/>
// <PrivateRoute exact path={`/${this.props.match.url}/:id/rsvp`} component={RsvpModal} />
