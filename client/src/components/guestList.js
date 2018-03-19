import React, {Component} from 'react'

class GuestList extends Component {
//list.
  guestListItem() {
      return this.props.guests.map((guest) => {
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
