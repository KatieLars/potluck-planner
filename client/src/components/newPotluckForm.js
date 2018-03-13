import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as potlucksActions from '../actions/potlucksActions'
import PotluckForm from './potluckForm'

const leftColStyle = {
  paddingTop: "15px",
  marginRight: "15px",
  textAlign: "left",
  paddingLeft: "0px"
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
          <Container style={{paddingTop: "15px"}}>
            <Row >
              <Col className="col-4" style={{paddingTop: "100px"}}>
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
