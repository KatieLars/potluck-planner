import React, {Component} from 'react'
import {Label, Form, FormGroup, Input, Container, Row, CardDeck} from 'reactstrap'
import {connect} from 'react-redux'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}
//either selecting guests or selecting recipes
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
