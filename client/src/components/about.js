import React from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'
import janKornstaedt from '../images/janKornstaedt.jpg'

const homeStyle = {
  opacity: "0.75",
  width: "60%",
  textAlign: "center",
  color: "black",
}

const homeBackground = {
  paddingLeft: "50px",
  paddingTop: "125px",
  backgroundImage: "url(" + janKornstaedt + ")",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
}

const About = () => {
    return(
      <div>
        <Container style={homeBackground}>
          <Row>
            <Col className="col-2"></Col>
              <Jumbotron style={homeStyle} >
                <h1>Potlucks . . . Upgraded!</h1>
                <p>Potluck planner takes your food-sharing game to the next level.
                Now you can track not only who's coming, but what they're bringing.
                Avoid guests bringing the same dishes (one can only eat so much potato salad, after all),
                get ideas for portable foods when you are at a loss of what to bring, and track your own
                contributions to the time-honored tradition of bringing a dish to pass.
                </p>
              </Jumbotron>
            </Row>
          </Container>
        </div>
    )
}

export default About
