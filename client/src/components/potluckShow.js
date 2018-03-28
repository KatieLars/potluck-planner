import React, {Component} from 'react'
import GuestPotluckShowCard from './guestPotluckShowCard'
import HostPotluckShowCard from './hostPotluckShowCard'


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
        {this.guestOrHost()}
      </div>
    )
  }
}

export default PotluckShow
