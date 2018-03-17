import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import NewFriendsList from './newFriendsList'
import history from '../history'

//used for
  //selecting guests (if creator of potluck) /guests/select
  //viewing guests (non-creator but invited) /guests
  //updating guestlist (if creator of potluck) /guests/update (but if logged in, should be checkmarks)
  //selecting recipes (any user) /recipes/select

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: [],
    }
  }

  // componentWillMount() {
  //    this.props.actions.getNotFriends()
  //  }

  // addFriendsHandler(event) {
  //   event.preventDefault()
  //   this.props.actions.addFriends(this.state.newFriendIds)
  // }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      newFriendIds: [...this.state.newFriendIds, event.target.value]
    })
  }

  cancel(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.match.params.potluckId}`)
  }

  render() {
    let header = null
    let body = null
    let button = null
    //all redirect to potluck show page
    switch(this.props.match.url){
      case "/recipes/select":
        header = <ModalHeader>Select Recipes</ModalHeader>
        body = <RecipeList />
        button = <Button>Add Recipes</Button>
      case "/guests":
        header = <ModalHeader>Guests</ModalHeader>
        body = <GuestList />
      case "/guests/select":
        header = <ModalHeader>Select Guests</ModalHeader>
        body = <NotGuestCheckList />
        button = <Button>Invite Guests</Button>
      case "guests/update":
        header =  <ModalHeader>Update Guest List</ModalHeader>
        body = <GuestCheckList />
        button = <Button>Update Guest List</Button>
    }

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          {header}
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              {body}
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

export default ListModal
