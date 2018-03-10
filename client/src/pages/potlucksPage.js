import React, {Component} from 'react'
import { Button, Container, Col, Row, Form} from 'reactstrap'
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

deletePotluck(event) {
  event.preventDefault();
  this.props.actions.deletePotluck()
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

      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(friendsActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.friends.friends){
    return {
      friends: state.friends.friends.friends
    }}else {
      return {
        state
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
