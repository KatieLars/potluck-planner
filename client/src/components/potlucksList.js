import React, {Component} from 'react'
import {Label, Form, FormGroup, Input, Container, Row, CardColumns} from 'reactstrap'
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
      <CardColumns className="col justify-content-center" style={{marginTop: "15px"}}>
        {this.potlucksCards()}
      </CardColumns>
    )
  }
}

export default PotlucksList
//className="col d-flex justify-content-center"
