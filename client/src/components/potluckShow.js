import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'
import {Container, Row, Col, Button} from 'reactstrap'
import history from '../history'

const imageStyle ={
  height: "30%",
  paddingBottom: "20px"
}

const containerStyle = {
  marginLeft: "100px",
  marginRight: "100px"
}

class PotluckShow extends Component {

  render() {
    return (
      <div>
        <Container style={containerStyle}>
          <Row style={{paddingTop: "25px"}}>
            <PotluckCard potluck={this.props.potluck}/>
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


// <Button onClick={(event) => {this.inviteGuests(event)}}>Invite Guests</Button>
// <Button onClick={(event) => {this.getAttendees(event)}}>See Who is Coming</Button>
