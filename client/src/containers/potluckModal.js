import React, {Component} from 'react'
import {Modal, ModalHeader, Form, ModalFooter, Button, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PotluckForm from '../components/potluckForm'
import * as potlucksActions from '../actions/potlucksActions'
import history from '../history'

//called for updating Potluck from Potluck Show Page
class PotluckModal extends Component {
  constructor(props) { //remeber to handle null values in api call for update
    super(props)
    this.state = {
      potluck: {
        name: "",
        date: "",
        time: "",
        location: "",
        image: "",
        user_id: this.props.potluck.user_id,
        id: this.props.potluck.id
    }
  }
}

  handleChange(event){
    const field = event.target.name;
    const updatedPotluck = this.state.potluck;
    updatedPotluck[field] = event.target.value;
    return this.setState({potluck: updatedPotluck})
  }

  updatePotluckHandler(event) {
    event.preventDefault() //potluckID falls off here
    this.props.actions.updatePotluck(this.state.updatedPotluck)
  }

  cancel(event) {
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}`)
  }

  render() {
    return(
      <div>
        <Modal isOpen="true" style={{paddingTop: "50px"}}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Form onChange={(event)=> this.handleChange(event)}>
              <PotluckForm potluck={this.props.potluck}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(event) => this.updatePotluckHandler(event)}>Update Potluck</Button>
            <Button onClick={(event) => this.cancel(event)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
   if(ownProps.match.params.id){ //coming from potluck show page
    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.id
    })
    return {
     potluck: potluck,
     user: state.users.user,
   }}else{
     return {
       user: state.users.user
     }
   }
 }

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(potlucksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PotluckModal)
