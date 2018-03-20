import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as guestsActions from '../actions/guestsActions'
import GuestList from '../components/guestList'

class GuestListContainer extends Component {

  render() {
      return(
        <div >
          <h5>Coming</h5>
          <GuestList guests={this.props.potluck.going_guests} />
          <hr className="my-4"/>
          <h5>Maybe</h5>
          <GuestList guests={this.props.potluck.maybe_guests} />
          <hr className="my-4"/>
          <h5>Not Coming</h5>
          <GuestList guests={this.props.potluck.not_going_guests} />
          <hr className="my-4"/>
          <h5>Not Yet RSVPed</h5>
          <GuestList guests={this.props.potluck.blank_guests}/>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(guestsActions, dispatch)
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
