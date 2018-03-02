import React from 'react'
import { Col, Row, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class signIn extends React.Component {
  constructor() {
    super()
    this.state = {
      password: "",
      email: ""
    }
  }

  handleChange = (event) => {
    this.setState(
      {password: event.target.value,
      email: event.target.value
      }
    )
  }

  render() {
    return(
      <Container>
        <Row style={{paddingTop: "25px"}}>
          <Col className="col-4"></Col>
          <Col className="col-4">
            <Form onChange={(event) => handleChange(event)} onSubmit={() => handleSubmit()}>
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

export default signIn
