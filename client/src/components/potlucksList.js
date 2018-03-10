import React, {Component} from 'react'
import {Label, Form, FormGroup, Input} from 'reactstrap'
import {connect} from 'react-redux'

class PotlucksList extends Component {

  potlucksCards() {
      return this.props.potlucks.map((potluck) => (
        <PotluckCard potluck={potluck} />
      )
    )}

  render() {
    return (
      <div>
        {this.potlucksCards()}
      </div>
    )
  }
}

export default NewFriendsList
