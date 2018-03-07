import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions'

class UpdateAccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {
        id: this.props.user.users.user.id,
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
    this.props.actions.updateUser(this.state.info);
  }

render() {
  const username = this.props.user.users.user.username
  const email = this.props.user.users.user.email
  const image = this.props.user.users.user.image
return(
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-4"></Col>
        <Col className="col-4">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder={username} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder={email} />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="text" name="image" id="image" placeholder={image} />
            </FormGroup>
            <FormGroup>
              <Label for="password">New Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <FormGroup>
              <Label for="passwordConfirmation">Confirm New Password</Label>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccountForm);
