import React, {Component} from 'react'
import FriendsList from '../components/friendsList'
import { Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'

class FriendsPage extends Component {

  componentWillMount() {
    this.props.actions.getFriends()
    //makes a get request to Friendships/index to get friends
  }

getModal(event) {
  event.preventDefault()
  history.push('/friends/add')
}

  render() {
    if (this.props.friends) {
      return(
        <div>
          <friendsList friends={this.props.friends}/>
          <Button onClick={(event)=> this.getModal(event)}>Add Friends</Button>
        </div>
      )
    }else {
      return(
        <div>
          <h1>Be friendly!</h1>
          <Button onClick={this.toggle}>Add Friends</Button>
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
