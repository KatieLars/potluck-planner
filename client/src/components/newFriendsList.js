import React, {Component} from 'react'
import {Label, FormGroup, Input} from 'reactstrap'

const imageStyle = {
  width: "10%",
}

class NewFriendsList extends Component {

  newFriendsCheckbox() {
      return this.props.newFriends.map((friend) => (
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
        {this.newFriendsCheckbox()}
      </div>
    )
  }
}

export default NewFriendsList
