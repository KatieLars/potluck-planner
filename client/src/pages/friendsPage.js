import React, {Component} from 'react'
import FriendsList from '../components/friendsList'
import { Button, Container, Col, Row, Form} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'
import * as friendsActions from '../actions/friendsActions'

class FriendsPage extends Component {
  constructor(){
    super();
    this.state=
      friends: []
  }

getModal(event) {
  event.preventDefault()
  history.push('/friends/add')
}

handleChange(event){


  }

  render() {
    const friends = this.props.friends.users.user.friends
    if (friends) {
      return(
        <div>
          <Form onChange={(event)=> this.handleChange(event)}>
          <Container style={{paddingTop: "15px"}}>
            <Row >
            <Col className="col-4" style={{paddingTop: "100px"}}>
              <h1>Friends!</h1>
            </Col>
              <FriendsList friends={friends}/>
            </Row>
            <Row>
              <Col className="col-4"></Col>
                <Button onClick={(event)=> this.getModal(event)}>Add Friends</Button>
                <Button onClick={(event) => this.removeFriends(event)}>Remove Friend</Button>
            </Row>
          </Container>
        </Form>
        </div>
      )
    }else {
      return(
        <div>
          <h1>Be friendly!</h1>
          <Button onClick={(event)=> this.getModal(event)}>Add Friends</Button>
        </div>
      )
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(friendsActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
