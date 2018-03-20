import React, {Component} from 'react'
import { Button, Container, Col, Row, CardColumns, Jumbotron} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as potlucksActions from '../actions/potlucksActions'
import PotlucksList from '../components/potlucksList'
import stillLife from '../images/stillLife.jpg'

const homeBackground = {
  backgroundImage: "url(" + stillLife + ")",
  height: "100vh",
  textAlign: "center"
}

const backgroundImage = {
  backgroundImage: "url(" + stillLife + ")",
  height: "100vh",
  textAlign: "center",
  color: "white",
}

class PotlucksPage extends Component {

componentWillMount() {
  this.props.actions.getPotlucks()
}

shouldComponentUpdate(nextProps, nextState) {
  return(this.props.potlucks != nextProps.potlucks)
 }

handleClick(event) {
  event.preventDefault()
  history.push("/potlucks/new")
}

  render() {

    if(this.props.potlucks) {
      return(
        <div style={homeBackground}  >
          <PotlucksList potlucks={this.props.potlucks} url={this.props.match.url} user={this.props.user} />
        </div>
      )
    }else{
      return(
        <div className="container-full-bg">
          <Jumbotron  style={backgroundImage}>
            <Container>
              <h1>No Potlucks!</h1>
                <Button onClick={(event) => this.handleClick(event)}>Create a Potluck</Button>
            </Container>
          </Jumbotron>
        </div>
      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(potlucksActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.potlucks.potlucks[0]){
    return {
      potlucks: state.potlucks.potlucks,
      user: state.users.user
    }}else {
      return {
        state
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PotlucksPage)
