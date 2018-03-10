import React, {Component} from 'react'
import {Label, Form, FormGroup, Input} from 'reactstrap'
import {connect} from 'react-redux'

const imageStyle = {
  width: "10%",
}

class NewFriendsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notFriends: this.props.notFriends.users.user.other_users
  //   }
  // }

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

// const mapStateToProps = (state) => { //not sure we need this code
//   return {
//     notFriends: state
//   }
// }

export default NewFriendsList
