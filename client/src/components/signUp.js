import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions'
import tonyCuranaj from '../images/tonyCuranaj.jpg'

const formStyle ={
  paddingTop: "150px",
  color: "white"
}

const formBackground = {
  paddingLeft: "450px",
  backgroundImage: "url(" + tonyCuranaj + ")",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
}

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        password: "",
        passwordConfirmation: "",
        username: "",
        email: "",
      }
    }
  }

handleChange(event){
  const field = event.target.name;
  const info = this.state.info;
  info[field] = event.target.value;
  return this.setState({info: info})
  }

handleSubmit(event) {
  event.preventDefault()
  this.props.actions.signUp(this.state.info);
}

render() {
return(
  <Container style={formBackground} >
    <Row style={formStyle}>
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <h1>Sign Up</h1><br></br>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <FormGroup>
              <Label for="passwordConfirmation">Password Confirmation</Label>
              <Input type="password" name="passwordConfirmation" id="passwordConfirmation" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUp)
