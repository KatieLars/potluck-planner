import React, {Component} from 'react'
import {connect} from 'react-redux'



class PotluckShow extends Component {

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

const mapStateToProps = (state, ownProps) => {
  const potluck = state.potlucks.find(potluck => {
    return potluck.id == ownProps.match.params.potluckId
  })
}

export default connect(mapStateToProps, null)(PotluckShow)
