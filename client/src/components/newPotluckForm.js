import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as potlucksActions from '../actions/potlucksActions'

class NewPotluckForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      potluck: {
        userId: this.props.id,
        location: "",
        happening: "",
        guestIds: [],
        description: "",
        image: "",
        name: ""
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
    this.props.actions.createPotluck(this.state.potluck);
  }

  getModal(event) {
    event.preventDefault()
    history.push("/potlucks/new/invite")
  }

render() {
return(
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-4"></Col>
        <Col className="col-4">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder={name} />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="location" name="location" id="location" placeholder={location} />
            </FormGroup>
              <Label for="happening">When</Label>
              <Input type="datetime" name="happening" id="happening" placeholder={happening} />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="text" name="image" id="image" placeholder={image} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" name="description" id="description" />
            </FormGroup>
            <FormGroup>
              <Button onClick={(event) => this.getModal(event)}>Invite Friends</Button>
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
