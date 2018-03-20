import React from 'react'
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import danielSpoerri from '../images/danielSpoerri.jpg'

const homeStyle = {
  opacity: "0.75",
  width: "60%",
  textAlign: "center",
  color: "black",
}

const homeBackground = {
  paddingLeft: "50px",
  paddingTop: "125px",
  backgroundImage: "url(" + danielSpoerri + ")",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
}

const Home = () => {
    return(
      <div>
        <Container style={homeBackground}>
        <Row>
        <Col className="col-2"></Col>
        <Jumbotron style={homeStyle} >
          <h1><strong>Potluck Planner</strong></h1>
          <p className="lead"><em><strong>What's happening, who's coming, and what is to eat!</strong></em></p>
          <hr className="my-4"/>
          <p><strong>Set a date. Invite friends. Bring food. And track it all.</strong></p>
          <Button><Link to="/about">Learn More</Link></Button>
        </Jumbotron>
        </Row>
        </Container>
      </div>
    )
}

export default Home
