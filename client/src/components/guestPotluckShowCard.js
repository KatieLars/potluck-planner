import React, {Component} from 'react'
import { CardLink, Card, CardFooter, CardHeader} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class GuestPotluckShowCard extends Component {

  createARecipe(event){ //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
  }

  selectRecipes(event) {//DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/select`)
  }

  changeRSVP(event) { //DONE
    history.push(`/potlucks/${this.props.potluck.id}/rsvp`)
    //should go directly to api, change guestship rsvp value, and come back to this url
  }

  getGuests(event) { //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests`)
  }

  render() {
    return (
      <Card style={subtitleStyle} >
      <PotluckCard potluck={this.props.potluck}>
      <CardHeader className="col d-flex justify-content-center">
      <span>
        <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.changeRSVP(event)}>{this.props.guestship.rsvp ? (this.props.guestship.rsvp) : ("RSVP")}</CardLink>
        <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.getGuests(event)} >Who Is Invited</CardLink>
      </span>
      </CardHeader>
        <CardFooter className="col d-flex justify-content-center">
            <span>
              <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</CardLink>
              <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.createARecipe(event)} >Create Recipe</CardLink>
            </span>
        </CardFooter>
        </PotluckCard>
      </Card>
    )
  }
}

export default GuestPotluckShowCard
