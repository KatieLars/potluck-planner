import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user.users.user.id,
      notFriends: [],
      newFriends: [],
    }
  }

  componentWillMount() { //may need to use componentDidMount
    this.setState = {
      notFriends: this.props.actions.getNotFriends(this.state.userId)
  }

  addFriendsHandler(event) {
    event.preventDefault()

  }

  render() {
    return(
      <div>
        <Modal isOpen="true">
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.addFriendsHandler(event)}>Add Friends<
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

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends)
