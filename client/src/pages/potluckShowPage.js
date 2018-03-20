import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckShow from '../components/potluckShow'
import {Container, Row, Col, Button, CardDeck} from 'reactstrap'
import history from '../history'
import RecipesList from '../containers/recipesList'
import stillLife from '../images/stillLife.jpg'

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

const homeBackground = {
  backgroundImage: "url(" + stillLife + ")",
  backgroundSize: "cover",
  height: "100%"
}


class PotluckShowPage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return(this.props.potluck !== nextProps.potluck)
  }

  render() {
    return (
      <div style={homeBackground}>
        <Container style={containerStyle}>
          <Row style={{paddingTop: "25px"}}>
            <CardDeck style={cardDecks}>
              <PotluckShow potluck={this.props.potluck} user={this.props.user} key={this.props.potluck.id}/>
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
      user: state.users.user
    }
  }else{
    return {
      state
    }
  }
}

export default connect(mapStateToProps, null)(PotluckShowPage)
