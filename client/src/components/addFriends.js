import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import NotFriendsList from './notFriendsList'
import history from '../history'

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user.users.user.id,
    }
  }

  componentWillMount() {
     // this.props.actions.getNotFriends(this.state.userId)
   }

  addFriendsHandler(event) {
    event.preventDefault()
    //adds friends to state, makes a post request to API
  }

  cancel(event) {
    event.preventDefault()
    history.push("/friends")
  }

  render() {
    debugger
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody><NotFriendsList /></ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.addFriendsHandler(event)}>Add Friends</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(friendsActions, dispatch)
  }
}

const mapStateToProps = (state) => { //not sure we need this code
  return {
    user: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends)
