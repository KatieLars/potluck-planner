import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions'

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
  const{history} = this.props
  history.push("/home")
}

render() {
return(
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-4"></Col>
        <Col className="col-4">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
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
        </Col>
        <Col className="col-4"></Col>
        </Row>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUp)
