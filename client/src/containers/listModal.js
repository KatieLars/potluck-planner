import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as recipesActions from '../actions/recipesActions'
import CheckList from '../components/checkList'
import GuestListContainer from './guestListContainer'
import GuestCheckList from '../components/guestCheckList'
import history from '../history'
import UpdateGuestListContainer from '../containers/updateGuestListContainer'
import NewFriendsList from '../components/newFriendsList'

//used for
  //selecting guests (if creator of potluck) /guests/select
  //viewing guests (non-creator but invited) /guests
  //updating guestlist (if creator of potluck) /guests/update (but if logged in, should be checkmarks)
  //selecting recipes (any user) /recipes/select

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: [],
      potluck_id: this.props.currentPotluck.id
    }
  }

  // componentWillMount() {
  //    this.props.actions.getNotFriends()
  //  }

  // addFriendsHandler(event) {
  //   event.preventDefault()
  //   this.props.actions.addFriends(this.state.newFriendIds)
  // }

  addRecipes(event) { //creates potluck_recipes
    event.preventDefault()
    this.props.actions.createPotluckRecipes(this.state)
  }

  removeGuests(event) {
    event.preventDefault()
    this.props.actions.removeGuests(this.state)
    //alters an existing guestlist if guest has not rsvped
  }

  inviteGuests(event) {
    event.preventDefault()
    this.props.actions.inviteGuests(this.state)
  }

  handleChange(event) {
    const newIds = () => {if(this.state.selectedIds.includes(event.target.value)) {//remove the value
      return this.state.selectedIds.filter(id => id != event.target.value)
    }else{
      return [...this.state.selectedIds, event.target.value]
    }}
    this.setState({
      selectedIds: newIds()
    })
  }

  cancel(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.match.params.potluckId}`)
  }

  dynamicElements() {
    let header = null
    let body = null
    let button = null

  switch(this.props.match.url){
    case `/potlucks/${this.props.currentPotluck.id}/recipes/select`: //DONE
      return {
        header: <ModalHeader>Select Recipes</ModalHeader>,
        body: <CheckList currentPotluck={this.props.currentPotluck} list={this.props.currentPotluck.not_potluck_recipes} />,
        button: <Button onClick={(event)=> this.addRecipes(event)}>Add Recipes</Button>
      }

    case `/potlucks/${this.props.currentPotluck.id}/guests`: //DONE
      return {
        header: <ModalHeader>Guests</ModalHeader>,
        body: <GuestListContainer potluck={this.props.currentPotluck} user={this.props.user}/>
      }

    case `/potlucks/${this.props.currentPotluck.id}/guests/select`: //DONE
      return {
        header: <ModalHeader>Select Guests</ModalHeader>,
        body: <NewFriendsList newFriends={this.props.currentPotluck.friends_to_invite} />,
        button: <Button onClick={(event) => this.inviteGuests(event)}>Invite Guests</Button>
      }

    case `/potlucks/${this.props.currentPotluck.id}/guests/update`: //update who's coming if they have not rsvped
     return {
        header:  <ModalHeader>Update Guest List</ModalHeader>,
        body: <UpdateGuestListContainer potluck={this.props.currentPotluck}/>,
        button: <Button onClick={(event) => this.removeGuests(event)}>Update Guest List</Button>
      }

    }
  }

  render() {

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          {this.dynamicElements().header}
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              {this.dynamicElements().body}
            </Form>
          </ModalBody>
          <ModalFooter>
            {this.dynamicElements().button}
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if(ownProps.match.params.potluckId){ //comping from potluck show page
      const potluck = state.potlucks.potlucks.find(potluck => {
        return potluck.id == ownProps.match.params.potluckId
      })
      if(potluck) {
        return {
          user: state.users.user,
          currentPotluck: potluck
        }
      }}else{
        return {
          user: state.users.user
        }

      }
    }
//will also need to bind guest actions
  const mapDispatchToProps = (dispatch) => {

    return {
      actions: bindActionCreators(recipesActions, dispatch)
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ListModal)
