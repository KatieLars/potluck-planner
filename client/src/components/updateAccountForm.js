import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UpdateAccountForm extends Component {
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
  const credentials = this.state.credentials;
  credentials[field] = event.target.value;
  return this.setState({info: info})
  }

handleSubmit(event) {
  event.preventDefault()
  this.props.actions.signIn(this.state.credentials);
}

render() {
return(
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-4"></Col>
        <Col className="col-4">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
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
        </Col>
        <Col className="col-4"></Col>
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

const mapStateToProps = (dispatch) => {
  return {
    user: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
