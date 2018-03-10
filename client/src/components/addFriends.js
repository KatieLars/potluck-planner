import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import FriendsList from './friendsList'
import history from '../history'

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notFriendsIds = [],
    }
  }

  componentWillMount() {
     this.props.actions.getNotFriends()
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

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody>
            <Form>
              <FriendsList friendships={this.props.friendships}/>
            </Form>
          </ModalBody>
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
  debugger
  return {
    friends: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends)
