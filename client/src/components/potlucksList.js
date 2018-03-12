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
      <div>
        <Container>
          <div className="card-deck">
            {this.potlucksCards()}
          </div>
        </Container>
      </div>
    )
  }
}

export default PotlucksList
