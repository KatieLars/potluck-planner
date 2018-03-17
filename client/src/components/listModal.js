import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import NewFriendsList from './newFriendsList'
import history from '../history'

//used for
  //selecting guests (if creator of potluck) /guest/select
  //viewing guests (non-creator but invited) /guests
  //updating guestlist (if creator of potluck) /guests (but if logged in, should be checkmarks)
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
    //if this.props.match.url

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <NewFriendsList newFriends={this.props.newFriends}/>
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
