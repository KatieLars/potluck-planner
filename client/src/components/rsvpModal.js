import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import * as guestsActions from '../actions/guestsActions'
import {bindActionCreators} from 'redux'

class RsvpModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rsvp: "",
      guestshipId: this.props.guestship.id,
      potluckId: this.props.guestship.potluck_id
    }
  }

  handleChange(event) {
    this.setState({
      rsvp: event.target.value
    })
  }

  changeRsvp(event) {
    event.preventDefault()
    this.props.actions.userRsvp(this.state)
  }

  cancel(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.guestship.potluck_id}`)
  }
  render() {
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>RSVP</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
            <FormGroup check className="form-check-inline">
              <Label check >
              <Input type="radio" name="difficulty" value="Going" />
              Going
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-inline">
              <Label check >
              <Input type="radio" name="difficulty" value="Maybe" />
              Maybe
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-inline">
              <Label check >
              <Input type="radio" name="difficulty" value="Not Going" />
              Not Going
              </Label>
            </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.changeRsvp(event)}>RSVP</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

  const mapStateToProps = (state, ownProps) => {
    if(ownProps.match.params.id){ //comping from potluck show page
        const guestship = state.users.user.guestships.find(guestship => {
          return guestship.potluck_id == ownProps.match.params.id
        })
        if(guestship) {
          return {
            guestship: guestship
          }
        }}else{
          return state
        }
      }

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(guestsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RsvpModal)
