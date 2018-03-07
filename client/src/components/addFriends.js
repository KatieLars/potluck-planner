import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'

class AddFriends extends Component {

  componentWillMount() {
    this.props.actions.getNotFriends()
  }
  render() {
    return(
      <div>
        <Modal isOpen="true">
          <ModalHeader>Hello!</ModalHeader>
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

export default AddFriends
