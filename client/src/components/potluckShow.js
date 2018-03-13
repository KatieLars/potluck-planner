import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'
import {Container, Row, Col, Button} from 'reactstrap'
import history from '../history'

const imageStyle ={
  height: "30%",
  paddingBottom: "20px"
}

class PotluckShow extends Component {

  getAttendees(event) => { //modal
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/attendees`)
  }
  inviteGuests(event) => { //modal
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests`)
  }

  render() {
    return (
      <div>
        <Container style={{textAlign: "center"}}>
          <Row style={{paddingTop: "25px"}}>
            <Col className="col-3"></Col>
            <Col className="col-6">
              <h1>{this.props.potluck.name}</h1>
              <img src={this.props.potluck.image} style={imageStyle}/>
              <h3>{this.props.potluck.location}</h3>
              <p><em>{this.props.potluck.date}</em>{this.props.potluck.time}</p>
              <p>{this.props.potluck.description}</p>
              <Button onClick={(event) => {this.inviteGuests(event)}}>Invite Guests</Button>
              <ButtononClick={(event) => {this.getAttendees(event)}}>See Who is Coming</Button>
              <Button>Suggest Recipes</Button> //modal with checkboxes
              <Button>Create A New Recipe</Button> //modal to create a new recipe
            </Col>
            <Col className="col-3"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if(state.potlucks.potlucks){
    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.id
    })
    return {potluck: potluck}
  }else{
    return {
      state
    }
  }
}

export default connect(mapStateToProps, null)(PotluckShow)
