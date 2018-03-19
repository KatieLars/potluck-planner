import React, {Component} from 'react'
import { Button, Container, Col, Row, CardColumns} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as guestsActions from '../actions/guestsActions'
import GuestList from '../components/guestList'
import stillLife from '../images/stillLife.jpg'

const homeBackground = {
  backgroundImage: "url(" + stillLife + ")",
  height: "100vh",
  textAlign: "center"
}
//index problem: sorting cooked and uncooked recipes
class GuestListContainer extends Component {

// componentWillMount() {
//   this.props.actions.getRecipes()
// }

shouldComponentUpdate(nextProps, nextState) { //true if change of recipes
  return(this.props.recipes !== nextProps.recipes)
 }

handleClick(event) {
  // event.preventDefault()
  // history.push("/recipes/new")
}

  render() {

      return(
        <div >
          <h3>Coming</h3>
          <GuestList guests={this.props.guests.goings} />
          <hr className="my-4"/>
          <h3>Maybe</h3>
          <GuestList guests={this.props.guests.maybes} />
          <h3>Not Coming</h3>
          <GuestList guests={this.props.guests.notGoings} />
          <hr className="my-4"/>
          <h3>Not Yet RSVPed</h3>
          <GuestList guests={this.props.guests.blanks/>
          <hr className="my-4"/>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(recipesActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.recipes) {
    return {
      recipes: state.recipes
    }
  }else{
    return{
      state
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestListContainer)
