import React, {Component} from 'react'
import {Label, Form, FormGroup, Input, Container, Row, CardDeck} from 'reactstrap'
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
      <div className="col d-flex justify-content-center">
        <CardDeck style={{margin: "10px"}}>
          {this.potlucksCards()}
        </CardDeck>
      </div>

    )
  }
}

export default PotlucksList

//className="col d-flex justify-content-center"
