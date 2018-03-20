import React, { Component } from 'react';
import {Form, FormGroup, Col, Row, Container, Button, Label, Input} from 'reactstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RecipeForm from '../components/recipeForm'
import * as recipesActions from '../actions/recipesActions'
import history from '../history'
import VintageEaster from '../images/VintageEaster.jpg'

const homeBackground = {
  backgroundImage: "url(" + VintageEaster + ")",
  backgroundSize: "cover",
  height: "100vh",
  color: "black"
}

class NewRecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        name: "",
        difficulty: "",
        url: "",
        image: ""
      }
    }
  }

  handleChange(event){
    const field = event.target.name;
    const recipe = this.state.recipe;
    recipe[field] = event.target.value;
    return this.setState({recipe: recipe})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.actions.createRecipe(this.state.recipe);
    history.push("/recipes")
  }

render() {
return(
    <div style={homeBackground}>
    <Container>
      <Row style={{paddingTop: "25px"}}>
        <Col className="col-3">
          <h1>New Recipe!</h1>
        </Col>
        <Col className="col-6">
          <Form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
            <RecipeForm />
            <Button>Create</Button>
          </Form>
        </Col>
        <Col className="col-3"></Col>
        </Row>
      </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipesActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewRecipePage)
