import React, { Component } from 'react'
import {Button, FormGroup, Input, Label} from 'reactstrap'

const imageStyle = {
  width: "100px",
  height: "100px"
}

class FriendsList extends Component {

friendsList() {
  debugger //this should iterate over the friends and friendships array
  return this.props.friends.map((friend) => (
      <FormGroup check style={{paddingLeft: "4.5rem"}}>
       <Label check>
         <Input type="checkbox" value={friend.id} />{' '}
          <img src={friend.image} className="img-thumbnail" style={imageStyle}/>{' '}{friend.username}
       </Label><br></br>
     </FormGroup>
    )
  )}

  render() {
    return (
      <div>
        {this.friendsList()}
      </div>
    )
  }
}

export default FriendsList
