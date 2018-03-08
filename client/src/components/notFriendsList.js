import React, {Component} from 'react'
import {Input, Form, FormGroup} from 'reactstrap'

const imageStyle = {
  width: "10%",
}

class NotFriendsList extends Component {

  //iterate over props passed in and return username and thumbnail image
notFriendsCheckbox() {
  debugger
    return this.props.notFriends.map((friend) => {
      return (
        <Input type="checkbox" value={friend.id} style={imageStyle}>
            <img src={friend.image} className="img-thumbnail"/>{friend.username}
         </Input>
      )
    })
  }



  render() {

    return (
      <div>
        {this.notFriendsCheckbox()}
      </div>
    )
  }
}

export default NotFriendsList
