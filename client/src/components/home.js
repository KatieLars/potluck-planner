import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'


class Home extends Component {

  render() {

    return(
      <div>
        <Jumbotron style={{textAlign: "center"}} >
          <h1>Potluck Planner</h1>
          <p className="lead"><em>What's happening, who's coming, and what's to eat!</em></p>
          <hr className="my-4"/>
          <p>Set a date. Invite friends. Bring food. And track it all.</p>
          <Button><Link to="/about">Learn More</Link></Button>
        </Jumbotron>
      </div>
    )
  }
}


export default Home
