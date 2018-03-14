import React, { Component } from 'react'
import {Button, FormGroup, Input, Label} from 'reactstrap'

const imageStyle = {
  width: "100px",
  height: "100px"
}
//takes a prop of friendships
class RecipesList extends Component {

recipesList() {
  return this.props.recipes.map((friendship) => (
      <FormGroup check key={friendship.friendship} style={{paddingLeft: "4.5rem"}}>
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
        {this.recipesList()}
      </div>
    )
  }
}

export default FriendsList
