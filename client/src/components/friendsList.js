import React, { Component } from 'react'
import {Button, FormGroup, Input, Label} from 'reactstrap'

const imageStyle = {
  width: "10%",
}

class FriendsList extends Component {

friendsList() {
  return this.props.friends.map((friend) => (
      <FormGroup check>
       <Label check>
         <Input type="checkbox" value={friend.id} />{' '}
          <img src={friend.image} className="img-thumbnail" style={imageStyle}/>{' '}{friend.username}
       </Label><br></br>
     </FormGroup>
    )
  )}

removeFriends(event) {
  event.preventDefault()
  //removes friends
}

  render() {
    return (
      <div>
        {this.friendsList()}
      </div>
    )
  }
}

export default FriendsList
