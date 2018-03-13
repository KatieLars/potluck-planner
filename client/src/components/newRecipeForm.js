import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as recipesActions from '../actions/recipesActions'

class NewRecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        // userId: this.props.user.id,
        name: "",
        difficulty: "",
        url: "",
        image: ""
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
    this.props.actions.createRecipe(this.state.recipe);
  }

render() {
return(
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup check className="form-check-inline">
              <Label>Difficulty: </Label>
            </FormGroup>
            <FormGroup check className="form-check-inline">
                <Input type="radio" name="easy" value="easy"/>
                Easy
            </FormGroup>
            <FormGroup check className="form-check-inline">
              <Label check>
                <Input type="radio" name="moderate" value="moderate" />
                Moderate
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-inline">
              <Label check>
                <Input type="radio" name="hard" value="hard"/>
                Hard
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="url">URL:</Label>
              <Input type="text" name="url" id="url" />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="text" name="image" id="image"/>
            </FormGroup>
            <Button>Create</Button>
          </Form>
        </Col>
        <Col className="col-3"></Col>
        </Row>
      </Container>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(potlucksActions, dispatch)
//   };
// }

export default NewRecipeForm