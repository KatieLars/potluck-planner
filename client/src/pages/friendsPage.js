import React, {Component} from 'react'
import FriendsList from '../components/friendsList'
import { Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class FriendsPage extends Component {

  componentWillMount() {
    this.actions.getFriends()
    //makes a get request to Friendships/index to get friends
  }

  handleClick(event) {
    event.preventDefault()
    this.props.actions.getUsers()
    //this will make an get request and produce a pop up window with a list of allusers
    //will need a redirect in action to popup
  }


  render() {
    if (this.props.friends) {
      return(
        <div>
          <friendsList friends={this.props.friends}/>
          <Button onClick={(event) => handleClick(event)}>Add Friends</Button>
        </div>
      )
    }else {
      return(
        <div>
          <h1>Be friendly!<h1>
          <Button onClick={(event) => handleClick(event)}>Add Friends</Button>
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

export default connect(null, mapDispatchToProps)(FriendsPage)

//this page must:
  //display all friends
  //offer the option to unfriend
  //add friends
