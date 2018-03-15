import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button}

//this modal should call the Recipe form component, but have a button to update
class UpdateRecipeModal extends Component {
  render() {
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <NewFriendsList newFriends={this.props.newFriends}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.updateRecipeHandler(event)}>Update Recipe</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UpdateRecipeModal
