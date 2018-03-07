import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


class AddFriends extends Component {

  componentWillMount() {
    //will grab a list of all users minus those who are already friends
  }
  render() {
    return(
      <div>
        <Modal>
          <ModalHeader>Hello!</ModalHeader>
        </Modal>
      </div>
    )
  }
}

export default AddFriends
