import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Button, Col, Row, Container } from 'reactstrap'
import {Link} from 'react-router-dom'
import BoysSpoerri from '../images/BoysSpoerri.jpg'

const imageStyle ={
  height: "100px",
  paddingBottom: "20px"
}

const backgroundImage = {
  backgroundImage: "url(" + BoysSpoerri + ")",
  backgroundSize: "cover",
  height: "100vh",
  textAlign: "center",
  color: "black",
}
class AccountPage extends Component {

  render() {
     const username = this.props.user.users.user.username
     const email = this.props.user.users.user.email
     const image = this.props.user.users.user.image
    return(
      <div style={backgroundImage}>
        <Container style={{textAlign: "center"}}>
          <Row style={{paddingTop: "25px"}}>
            <Col className="col-3"></Col>
            <Col className="col-6">
              <h3>{username}</h3>
              <img src={image} style={imageStyle}/>
              <p><em>Email: </em>{email}</p>
              <Button><Link to="/account/update">Update Account</Link></Button>
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

export default connect(mapStateToProps, null)(AccountPage)
