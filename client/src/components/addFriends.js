import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as friendsActions from '../actions/friendsActions'
import NewFriendsList from './newfriendsList'
import history from '../history'

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notFriendshipsIds: [],
    }
  }

  componentWillMount() {
     this.props.actions.getNotFriends()
   }

  addFriendsHandler(event) {
    event.preventDefault()
    //adds friends to state, makes a post request to API
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      notFriendshipsIds: [...this.state.notFriendshipIds, event.target.value]
    })
  }

  cancel(event) {
    event.preventDefault()
    history.push("/friends")
  }

  render() {

    if(this.props.newFriends){
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
            <Button onClick={(event) => this.addFriendsHandler(event)}>Add Friends</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }else{
      return(
        <div>
          <h1>You are friends with all the friends!</h1>
          <Button onClick={(event) => this.cancel(event)}>Return to Friends!</Button>
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
    }}else {
      return {
        state
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends)
