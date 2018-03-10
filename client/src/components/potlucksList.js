import React, {Component} from 'react'
import {Label, Form, FormGroup, Input} from 'reactstrap'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'

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

export default PotlucksList
