import React, {Component} from 'react'
import FriendsList from '../components/friendsList'
import { Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as friendsActions from '../actions/friendsActions'

class FriendsPage extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userId: this.props,
  //     friends: []
  //   }
  // }

  componentWillMount() {
     // this.props.actions.getFriends(this.state.userId)
  }

getModal(event) {
  event.preventDefault()
  history.push('/friends/add')
}

  render() {
    const friends = this.props.friends.users.user.other_users
    debugger
    if (friends) {
      return(
        <div>
          <friendsList friends={friends}/>
          <Button onClick={(event)=> this.getModal(event)}>Add Friends</Button>
        </div>
      )
    }else {
      return(
        <div>
          <h1>Be friendly!</h1>
          <Button onClick={(event)=> this.getModal(event)}>Add Friends</Button>
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
  return {
    friends: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)

//this page must:
  //display all friends
  //offer the option to unfriend
  //add friends
