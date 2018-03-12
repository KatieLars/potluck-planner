import React, {Component} from 'react'
import { Button, Container, Col, Row} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as potlucksActions from '../actions/potlucksActions'
import PotlucksList from '../components/potlucksList'

class PotlucksPage extends Component {

componentWillMount() {
  this.props.actions.getPotlucks()
}

shouldComponentUpdate(nextProps, nextState) { //true if change of friends
  return(this.props.potlucks != nextProps.potlucks)
 }

handleClick(event) {
  event.preventDefault()
  // history.push("/potlucks/new")
}

  render() {

    if(this.props.potlucks) {
      return(
        <div>
          <PotlucksList potlucks={this.props.potlucks} />
          //should render a series of potlucks cards, 3 across
        </div>
      )
    }else{
      return(
        <div>
          <h1>No Potlucks!</h1>
          <Button onClick={(event) => this.handleClick(event)}>Create a Potluck</Button>
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
  if(state.potlucks.potlucks){
    return {
      potlucks: state.potlucks.potlucks.potlucks
    }}else {
      return {
        state
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(PotlucksPage)
