import React, {Component} from 'react'
import { Button, Container, Col, Row, CardColumns} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as guestsActions from '../actions/guestsActions'
import GuestList from '../components/guestList'
import GuestCheckList from '../components/guestCheckList'
//accessible if you are a host
class GuestListContainer extends Component {
  constructor() {
    super();
    this.state = {
      guestIds: [],
    }
  }

  handleChange(event) {
    this.setState({
      guestIds: [...this.state.guestIds, event.target.value]
    })
  }

  updateGuestsHandler(event) {
    event.preventDefault()
    //alters an existing guestlist if guest has not rsvped
  }

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
          <Form onChange={(event)=> this.handleChange(event)}/>
            <GuestCheckList guests={this.props.potluck.blank_guests}/>
          </Form>
            <Button onClick={(event) => this.updateGuestsHandler(event)}>Update Guests</Button>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(guestsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestListContainer)
