import React, { Component } from 'react';
import {Form, FormGroup, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions'
import peeledOrange from "../images/peeledOrange.jpg"

const formStyle ={
  paddingTop: "150px",
  color: "white"
}

const formBackground = {
  paddingLeft: "450px",
  backgroundImage: "url(" + peeledOrange + ")",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
}

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        password: "",
        email: "",
      }
    }
  }

handleChange(event){
  const field = event.target.name;
  const credentials = this.state.credentials;
  credentials[field] = event.target.value;
  return this.setState({credentials: credentials})
  }

handleSubmit(event) {
  event.preventDefault()
  this.props.actions.signIn(this.state.credentials);
}

render() {
return(
    <Container style={formBackground} >
      <Row style={formStyle}>
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <h1>Sign In</h1><br></br>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
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

export default connect(null, mapDispatchToProps)(SignIn);
