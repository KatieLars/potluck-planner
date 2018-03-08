import React, {Component} from 'react'
import {Label, Form, FormGroup, Input} from 'reactstrap'
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
      return this.state.notFriends.map((friend) => (
        <FormGroup check>
         <Label check>
           <Input type="checkbox" value={friend.id} />{' '}
           {friend.username}
         </Label>
       </FormGroup>
      )
    )}

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
