import React, {Component} from 'react'
import {Input, Form, FormGroup} from 'reactstrap'
import {connect} from 'react-redux'

const imageStyle = {
  width: "10%",
}

class NotFriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notFriends: this.props.notFriends.users.user.other_users
    }
  }

  notFriendsCheckbox() {
    debugger
      return this.state.notFriends.map((friend) => {
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
