import React, {Component} from 'react'

class GuestList extends Component {

  filterGuests() {
    return this.props.guests.filter(guest => guest !== null)
  }

  guestListItem() {
      const filteredGuests = this.filterGuests()
      return filteredGuests.map((guest) => {
        return <li><img src={guest.image} /> {guest.username}</li>
      }
    )
  }

  render() {
    if(this.props.guests[0]){
      return (
        <ul>
          {this.guestListItem()}
        </ul>
      )
    }else{
      return (
      <div>
      </div>
    )
    }
  }
}

export default GuestList
