import React, { Component } from 'react'
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as sessionActions from '../actions/sessionActions'
import { Button, Col, Row, Container } from 'reactstrap'


class AccountPage extends Component {

  render() {
     const username = this.props.user.users.user.username
     const email = this.props.user.users.user.email
     const image = this.props.user.users.user.image
    return(
      <div style={{textAlign: "center"}}>
        <Container>
          <Row>
            <Col className="col-3"></Col>
            <Col className="col-6">
              <h3>{username}</h3>
              <img src={image}/>
              <p><em>Email: </em>{email}</p>
            </Col>
            <Col className="col-3"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(sessionActions, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(AccountPage)
