import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as recipesActions from '../actions/recipesActions'
import CheckList from '../components/checkList'
import GuestList from '../components/guestList'
import GuestCheckList from '../components/guestCheckList'
import history from '../history'

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

  handleChange(event) {
    event.preventDefault()
    this.setState({
      newFriendIds: [...this.state.selectedIds, event.target.value]
    })
  }

  cancel(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.match.params.potluckId}`)
  }

  render() {
    let header = null
    let body = null
    let button = null
    //all redirect to potluck show page
    switch(this.props.match.url){
      case "/recipes/select": //checklist of recipes to select
        header = <ModalHeader>Select Recipes</ModalHeader>
        body = <CheckList currentPotluck={this.props.currentPotluck} recipes={this.props.currentPotluck.not_potluck_recipes} />
        button = <Button onClick={(event)=> this.addRecipes(event)}>Add Recipes</Button>
      case "/guests": //list of guests
        header = <ModalHeader>Guests</ModalHeader>
        body = <GuestList guests={this.props.currentPotluck.guests} />
      case "/guests/select": //list of friends not already guests
        header = <ModalHeader>Select Guests</ModalHeader>
        body = <CheckList guests={this.props.currentPotluck.friendsNotInvited} currentPotluck={this.props.currentPotluck}/>
        button = <Button>Invite Guests</Button>
      case "/guests/update": //update who's coming of they have not rsvped
        header =  <ModalHeader>Update Guest List</ModalHeader>
        body = <GuestCheckList currentPotluck={this.props.currentPotluck}/>
        button = <Button>Update Guest List</Button>
    }

    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          {header}
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              {body}
            </Form>
          </ModalBody>
          <ModalFooter>
            {button}
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
          currentPotluck: potluck
        }
      }}else{
        return state
      }
    }
//will also need to bind guest actions
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(recipesActions, dispatch)
    }
  }
export default connect(mapStateToProps, null)(ListModal)
