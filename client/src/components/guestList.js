import React, {Component} from 'react'

class GuestList extends Component {

  guestListItem() {
      return this.props.guests.map((guest) => (
        <li><img src={guest.image} /> {guest.username}</li>
      )
    )}

  render() {
    return (
      <ul>
        {this.guestListItem()}
      </ul>
    )
  }
}

export default GuestList
