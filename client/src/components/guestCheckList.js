import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as guestsActions from '../actions/guestsActions'
import NewFriendsList from './newFriendsList'
import history from '../history'

//needs to be a list of all guests with checkboxes if they have not rsvped

class GuestCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uninvitedGuests: {
        uninvitedGuestIds: [],
        userId: this.props.user.id, //must be current user
        potluckId: this.props.potluck.id //needed to create or destroy guestships
    }
  }
}

  componentWillMount() {
     //this.props.actions.getGuests()
   }

  cancel(event) {
    event.preventDefault()
    //history.push to potluck show page
  }

  uninviteGuests(event) {
    event.preventDefault()
    this.props.actions.uninviteGuests(this.state.uninvitedGuests)
    //alert and redirect back to Potluck show page
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      uninvitedGuestIds: [...this.state.uninviteGuests.uninvitedGuestIds, event.target.value]
    })
  }

inviteGuests(event){
  event.preventDefault()
  history.push(`/potlucks/${this.props.potluck.id}/guests/invite`)
}

  render() {
    if(this.props.guests){
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Guests</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <NewFriendsList newFriends={this.props.guests}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.uninviteGuests(event)}>Uninvite Guests</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }else{
      return(
        <div>
          <Modal isOpen="true" style={{paddingTop: "50px"}}>
            <ModalHeader>No Guests!</ModalHeader>
            <ModalBody>
              <Button onClick={(event) => this.inviteGuests(event)}>Extend that Invite</Button>
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(guestsActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.friends.friends){
    return {
      newFriends: state.friends.friends.notFriends
    }
  }
}

export default connect(mapStateToProps, null)(GuestCheckList)
