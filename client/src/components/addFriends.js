import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId = this.props.user.users.user.id,
    }
  }

  componentWillMount() { //may need to use componentDidMount
    this.props.actions.getNotFriends(userId)
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

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends)
