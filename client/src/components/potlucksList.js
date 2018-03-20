import React, {Component} from 'react'
import {CardDeck} from 'reactstrap'
import PotluckIndexCard from './potluckIndexCard'
import CanceledPotluckCard from './canceledPotluckCard'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}

class PotlucksList extends Component {

  potlucksCards() {
     return this.props.potlucks.map((potluck) => {
        if(potluck.canceled) {
          return <CanceledPotluckCard potluck={potluck} />
        }else{
          return <PotluckIndexCard potluck={potluck} url={this.props.url} user={this.props.user}/>
        }
      }
    )}

  render() {
    return (
      <CardDeck style={cardDecks}>
        {this.potlucksCards()}
      </CardDeck>
    )
  }
}

export default PotlucksList
