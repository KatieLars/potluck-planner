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

  getAttendees(event) { //modal
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/attendees`)
  }
  inviteGuests(event) { //modal
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}/guests`)
  }

  render() {
    return (
      <div>
        <Container style={{textAlign: "center"}}>
          <Row style={{paddingTop: "25px"}}>
            <Col className="col-3">
            <PotluckCard potluck={this.props.potluck}/>
            <Button onClick={(event) => {this.inviteGuests(event)}}>Invite Guests</Button>
            <Button onClick={(event) => {this.getAttendees(event)}}>See Who is Coming</Button>
            </Col>
            <Col className="col-9">

            </Col>

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

// <h1>{this.props.potluck.name}</h1>
// <img src={this.props.potluck.image} style={imageStyle}/>
// <h3>{this.props.potluck.location}</h3>
// <p><em>{this.props.potluck.date}</em>{this.props.potluck.time}</p>
// <p>{this.props.potluck.description}</p>
