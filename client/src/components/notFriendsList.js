import React, {Component} from 'react'
import {Input, Form, FormGroup}

const imageStyle = {
  width: "10%",
}

class NotFriendsList extends Component {

  //iterate over props passed in and return username and thumbnail image
  const notFriendsCheckbox = () => {
    this.props.not_friends.map((friend) => {
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
        {notFriendsCheckbox}
      </div>
    )
  }
}

export default NotFriendsList
