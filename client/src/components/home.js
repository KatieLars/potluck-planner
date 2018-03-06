import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Home extends Component {
  debugger
  render() {
    debugger
    return(
      <div>
        <Jumbotron style={{textAlign: "center"}} >
          <h1>Potluck Planner</h1>
          <p>{this.props.user}</p>
          <p className="lead"><em>What's happening, who's coming, and what's to eat!</em></p>
          <hr className="my-4"/>
          <p>Set a date. Invite friends. Bring food. And track it all.</p>
          <Button><Link to="/about">Learn More</Link></Button>
        </Jumbotron>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Home)
