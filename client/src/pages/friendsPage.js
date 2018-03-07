import React, {Component} from 'react'
import friendsList from '../components/friendsList'
import {Button} from 'reactstrap'

class FriendsPage extends Component {

  componentWillMount() {
    //makes a get request to Friendships/index to get friends
  }

  handleClick(event) {
    //this will make an get request and produce a pop up window with a list of allusers
    //will need a redirect in action to popup
  }


  render() {
    if (this.props.friends) {
      return(
        <div>
          <friendsList friends={this.props.friends}/>
          <Button onClick={(event) => handleClick(event)}>
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

export default

//this page must:
  //display all friends
  //offer the option to unfriend
  //add friends
