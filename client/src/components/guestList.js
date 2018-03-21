import React, {Component} from 'react'

class GuestList extends Component {

  filterGuests() {
    return this.props.guests.filter(recipe => recipe.recipe !== null)
  }

  guestListItem() {
    debugger
      const filteredGuests = this.filterGuests()
      return filteredGuests.map((guest) => {
        return <li><img src={guest.image} /> {guest.username}</li>
      }
    )
  }

  render() {
    debugger
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
