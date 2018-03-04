import React, { Component } from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'

class About extends Component {
  render() {
    return(
      <div>
      <Jumbotron style={{textAlign: "center"}}>
  <h1>Potlucks . . . Upgraded!</h1>
  <Container>
    <Row>
      <Col className="col-3"></Col>
      <Col className="col-6"><p>Potluck planner takes your food-sharing game to the next level.
      Now you can track not only who's coming, but what they're bringing.
      Avoid guests bringing the same dishes (one can only eat so much potato salad, after all),
      get ideas for portable foods when you're at a loss of what to bring, and track your own
      contributions to the time-honored tradition of bringing a dish to pass.
      </p></Col>
      <Col className="col-3"></Col>
    </Row>
  </Container>
</Jumbotron>
      </div>
    )
  }
}

export default About
