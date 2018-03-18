import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {connect} from 'react-redux'

//makes api call and changes guestship.rsvp value
class RsvpModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rsvp: [],
      guestshipId: this.props.guestship.id
    }
  }
  render() {

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>RSVP</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              {this.dynamicElements().body}
            </Form>
          </ModalBody>
          <ModalFooter>
            {this.dynamicElements().button}
            <Button onClick={(event) => this.changeRsvp(event)}
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  const mapStateToProps = (state, ownProps) => {
    if(ownProps.match.params.potluckId){ //comping from potluck show page
        const guestship = state.users.user.guestships.find(guestship => {
          return guestship.potluck_id == ownProps.match.params.potluckId
        })
        if(guestship) {
          return {
            guestship: guestship
          }
        }}else{
          return state
        }
      }
}

export default RsvpModal
