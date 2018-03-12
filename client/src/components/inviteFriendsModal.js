import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import FriendsList from './friendsList'
import history from '../history'

class InviteFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendIds: [],
    }
  }

  componentWillMount() {
     this.props.actions.getFriends()
   }

  inviteFriendsHandler(event) {
    event.preventDefault()
    //creates guestships
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      friendIds: [...this.state.friendIds, event.target.value]
    })
  }

  cancel(event) {
    event.preventDefault()
  //redirects to potluck show page
  }

  render() {
    if(this.props.friendships){
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader>Select Friends</ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <FriendsList friendships={this.props.friendships}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.inviteFriendsHandler(event)}>Add Friends</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }else{
      return(
        <div>
          <Modal isOpen="true" style={{paddingTop: "50px"}}>
            <ModalHeader>You are friends with all the friends!</ModalHeader>
            <ModalBody>
              <Button onClick={(event) => this.cancel(event)}>Return to Friends!</Button>
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(friendsActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  if(state.friends.friends){
    return {
      newFriends: state.friends.friends.notFriends
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriends)