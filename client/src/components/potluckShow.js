import React, {Component} from 'react'
import GuestPotluckShowCard from './guestPotluckShowCard'
import HostPotluckShowCard from './hostPotluckShowCard'
import PrivateRoute from '../privateRoute'
import ListModal from '../containers/listModal'
import PotluckModal from '../containers/potluckModal'
import RecipeModal from '../containers/recipeModal'
import RsvpModal from '../components/rsvpModal'

class PotluckShow extends Component {

  guestOrHost() {
    if(this.props.user.id == this.props.potluck.user_id) {
      return <HostPotluckShowCard potluck={this.props.potluck} user={this.props.user}/>
    }else {
      const guestship = this.props.potluck.guestships.find(guestship => {
        return guestship.guest_id == this.props.user.id
      })
      return <GuestPotluckShowCard potluck={this.props.potluck} user={this.props.user} guestship={guestship}/>
    }
  }

  render() {
    return (
      <div>
      <PrivateRoute exact path={`/${this.props.match.url}/:id/edit`} component={PotluckModal} />
      <PrivateRoute path={`/${this.props.match.url}/:potluckId/guests/select`} component={ListModal}/>
      <PrivateRoute path={`/${this.props.match.url}/:potluckId/guests/update`} component={ListModal}/>
      <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/guests`} component={ListModal}/>
      <PrivateRoute exact path={`/${this.props.match.url}/:potluckId/recipes/select`} component={ListModal}/>
      <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/:recipeId`} component={RecipeModal} />
      <PrivateRoute path={`/${this.props.match.url}/:potluckId/recipes/new`} component={RecipeModal}/>
      <PrivateRoute exact path={`/${this.props.match.url}/:id/rsvp`} component={RsvpModal} />
        {this.guestOrHost()}
      </div>
    )
  }
}

export default PotluckShow
