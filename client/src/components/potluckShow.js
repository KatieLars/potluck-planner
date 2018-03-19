import React, {Component} from 'react'
import { CardLink, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardHeader, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import history from '../history.js'
import {connect} from 'react-redux'
import GuestPotluckShowCard from './guestPotluckShowCard'
import HostPotluckShowCard from './hostPotluckShowCard'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class PotluckShow extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dynamicElements: null,
//       rsvp: ""
//     }
//   }
//   //
//   componentWillMount() {
//     let guestship = this.props.potluck.guestships.find(guestship => {
//       return guestship.guest_id == this.props.user.id
//     })
//     debugger
//     if(guestship){
//       this.setState({
//         rsvp: guestship.rsvp,
//         dynamicElements: this.dynamicElements()
//       })
//     }else{
//       this.setState({
//         dynamicElements: this.dynamicElements()
//       })
//     }
//   }
//
//   componentWillReceiveProps(nextProps) {//HERE!!!
//     debugger
//     if(this.props.potluck !== nextProps.potluck){
//       let guest = nextProps.potluck.guestships.find(guestship => {
//         return guestship.guest_id == nextProps.user.id
//       })
//       this.setState({
//         rsvp: guest.rsvp
//       })
//     }
//   }
//
// createARecipe(event){ //DONE
//   event.preventDefault()
//   history.push(`/potlucks/${this.props.potluck.id}/recipes/new`)
// }
//
// selectRecipes(event) {//DONE
//   event.preventDefault()
//   history.push(`/potlucks/${this.props.potluck.id}/recipes/select`)
// }
//
// inviteGuests(event) { //invite guests from friends
//   event.preventDefault()
//   history.push(`/potlucks/${this.props.potluck.id}/guests/invite`)
// }
//
// getGuests(event) { //gets guests and sorts them according to rsvp
//   event.preventDefault()
//   history.push(`/potlucks/${this.props.potluck.id}/guests`)
// }
//
// updatePotluck(event) { //update basic potluck info
//   event.preventDefault()
//   history.push(`/potlucks/${this.props.potluck.id}/edit`)
// }
//
// cancelPotluck(event) {
//   event.preventDefault()
//   //should go directly to API and cancel potluck
// }
//
// changeRSVP(event) {
//   history.push(`/potlucks/${this.props.potluck.id}/rsvp`)
//   //should go directly to api, change guestship rsvp value, and come back to this url
// }
//
// dynamicElements() {
//   let header = null
//   let footer = null
//
// switch(this.props.user.id == this.props.potluck.user_id){
//   case true: //if user is the same as creator of potluck
//     return {
//       header: <CardHeader className="col d-flex justify-content-center">
//                 <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updateGuestList(event)}>Update Guest List</CardLink>
//                 <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.inviteGuests(event)}>Invite Guests</CardLink>
//               </CardHeader>,
//       footer: <span>
//                 <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</CardLink>
//                 <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</CardLink>
//               </span>
//     }
//   case false: //if user is a guest, not the host need RSVP option
//
//     let guestship = this.props.potluck.guestships.find(guestship => {
//       return guestship.guest_id == this.props.user.id
//     }) //shows guestship
//     if(guestship){
//       return {
//         header:
//           <CardHeader className="col d-flex justify-content-center">
//             <CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.changeRSVP(event)}>{this.state ? (this.state.rsvp) : ("RSVP")}</CardLink>
//           </CardHeader>,
//         footer: null
//         }
//       }
//     }
//   }

  guestOrHost() {
    //if user id is equal to the owner of the potluck id
    if(this.props.user.id == this.props.potluck.user_id) { //host
      return <HostPotluckShowCard potluck={this.props.potluck} user={this.props.user}/>
    }else {//guets
      const guestship = this.props.potluck.guestships.find(guestship => {
        return guestship.guest_id == this.props.user.id
      })
      return <GuestPotluckShowCard potluck={this.props.potluck} user={this.props.user} guestship={guestship}/>
    }
  }

//should read rsvp if user is potluck user
//props url determines if displayed on potluck index page (url) or potluck show page (no url)
  render() { //filter into two types of card--guest card and host card
    return (
      <div>
        {this.guestOrHost()}
      </div>
    )
  }
}

//<CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.updatePotluck(event)} >Edit Potluck</CardLink>
//<CardLink href="#" style={{display: "inline-block"}} onClick={(event) => this.cancelPotluck(event)} >Cancel Potluck</CardLink>
export default PotluckShow

// <Card style={subtitleStyle} >
//
//   <CardImg top width="100%" src={this.props.potluck.image} alt="Potluck Image" />
//     <CardBody>
//       <CardTitle>{this.props.potluck.name}</CardTitle>
//       <CardSubtitle style={{fontSize: "0.7em"}}>{this.props.potluck.format_date}</CardSubtitle>
//       <CardText>
//         <p></p>
//         <p><em>{this.props.potluck.format_time}</em></p>
//         <p>Location: {this.props.potluck.location}</p>
//         {this.props.potluck.description}
//       </CardText>
//     </CardBody>
//         <CardFooter className="col d-flex justify-content-center">
//             <span>
//               <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.selectRecipes(event)} >Suggest Recipes</CardLink>
//               <CardLink href="#" style={{display: "inline-block"}}onClick={(event) => this.createARecipe(event)} >Create Recipe</CardLink>
//               {this.state.dynamicElements ? this.state.dynamicElements.footer : null}
//             </span>
//         </CardFooter>
//
// </Card>
