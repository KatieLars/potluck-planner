import React, {Component} from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const imageStyle = {
  width: "100px",
  height: "100px"
}

class GuestCheckList extends Component {
  guestList() {
    return this.props.guests.map((guest) => (
        <FormGroup check key={guest.id} style={{paddingLeft: "4.5rem"}}>
         <Label check>
           <Input type="checkbox" value={guest.id} />{' '}
            <img src={guest.image} className="img-thumbnail" style={imageStyle}/>{' '}{guest.username}
         </Label><br></br>
       </FormGroup>
      )
    )}

  render() {
    return(
      <div>
        {this.guestList()}
      </div>
    )
  }
}

export default GuestCheckList
