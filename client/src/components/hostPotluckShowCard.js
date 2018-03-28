import React, {Component} from 'react'
import { CardLink, Card, CardFooter, CardHeader} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'
import {bindActionCreators} from 'redux'
import * as potlucksActions from '../actions/potlucksActions'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class HostPotluckShowCard extends Component {

  createARecipe(event){ //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
  }

  selectRecipes(event) {//DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/recipes/select`)
  }

  inviteGuests(event) { //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests/select`)
  }

  updateGuestList(event) { //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests/update`)
  }

  updatePotluck(event) { //DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/edit`)
  }

  cancelPotluck(event) {
    event.preventDefault()
    this.props.actions.cancelPotluck(this.props.potluck.id)
  }

  render() {
    return (
      <Card style={subtitleStyle} >
        <PotluckCard potluck={this.props.potluck} >
        <CardHeader className="col d-flex justify-content-center">
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updateGuestList(event)}>Update Guest List</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</CardLink>
        </CardHeader>

        <CardFooter className="col d-flex justify-content-center">
          <span>
            <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</CardLink>
            <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.createARecipe(event)} >Create Recipe</CardLink>
          </span>
          <span>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</CardLink>
            <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</CardLink>
          </span>
        </CardFooter>
        </PotluckCard>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(potlucksActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HostPotluckShowCard)
