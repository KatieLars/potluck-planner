import React, { Component } from 'react'

class FriendsList extends Component {
friendsList() {
  debugger
      return this.props.friends.map((friend) => (
        <FormGroup check>
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
