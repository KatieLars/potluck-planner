import React, { Component } from 'react'
import {Button, FormGroup, Input, Label} from 'reactstrap'

const imageStyle = {
  width: "100px",
  height: "100px"
}

class FriendsList extends Component {

friendsList() {

  return this.props.friendships.map((friendship) => (
      <FormGroup check key={friendship.frinedship} style={{paddingLeft: "4.5rem"}}>
       <Label check>
         <Input type="checkbox" value={friendship.friendship} />{' '}
          <img src={friendship.friend.image} className="img-thumbnail" style={imageStyle}/>{' '}{friendship.friend.username}
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
