import React, {Component} from 'react'
import {Input, Form, FormGroup} from 'reactstrap'
import {connect} from 'react-redux'

const imageStyle = {
  width: "10%",
}

class NotFriendsList extends Component {

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

const mapStateToProps = (state) => { //not sure we need this code
  return {
    notFriends: state
  }
}

export default connect(mapStateToProps, null)(NotFriendsList)
