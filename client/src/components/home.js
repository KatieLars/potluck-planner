import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
// import "../images/Potluck.jpg"
//
// const potluck = {
//   backgroundImage: "../images/Potluck.jpg"
// }

const Home = () =>{
  return(
    <div>
      <Jumbotron style={{textAlign: "center"}}>
        <h1>Welcome</h1>
        <p className="lead"><em>What's happening, who's coming, and what's to eat!</em></p>
        <hr class="my-4"/>
        <p>Set a date. Invite friends. Bring food. And track it all.</p>
        <Button><NavLink to="/about">Learn More</NavLink></Button>
      </Jumbotron>
    </div>
  )
}

export default Home
