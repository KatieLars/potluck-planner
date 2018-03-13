import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as potlucksActions from '../actions/potlucksActions'
import PotluckForm from './potluckForm'

const leftColStyle = {
  paddingTop: "100px",
  
}

const containerStyle = {
  marginLeft: "100px",
  paddingTop: "15px"
}

class NewPotluckForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      potluck: {
        userId: this.props.id,
        location: "",
        happening: "",
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

render() {
return(
      <div>
        <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
          <Container style={containerStyle}>
            <Row >
              <Col className="col-4" style={leftColStyle}>
                <h1>New Potluck!</h1>
              </Col>
              <PotluckForm />
            </Row>
            <Row>
              <Col className="col-4"></Col>
              <Button>Create</Button>
            </Row>
          </Container>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(potlucksActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewPotluckForm);
