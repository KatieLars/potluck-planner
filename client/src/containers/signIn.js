import React from 'react'
import { Col, Row, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class signIn extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <Container>
        <Row>
          <Col className="col-3"></Col>
          <Col className-"col-6">
            <Form>
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
          <Col className="col-3"></Col>
        </Row>
      </Container>
    )
  }

}

export default signIn
