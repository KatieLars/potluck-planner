import React, {Component} from 'react'

class GuestList extends Component {

  guestListItem() {
      return this.props.guests.map((guest) => (
        <li><img src={guest.image} /> {guest.username}</li>
      )
    )}

  render() {
    if(this.props.guests.first){
      return (
        <ul>
          {this.guestListItem()}
        </ul>
      )
    }else{
      <div>
      </div>
    }
  }
}

export default GuestList
