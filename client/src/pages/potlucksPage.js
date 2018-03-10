import React, {Component} from 'react'
import { Button, Container, Col, Row, Form} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import history from '../history.js'

class PotlucksPage extends Component {

componentWillMount() {
  this.props.actions.getPotlucks()
}

shouldComponentUpdate(nextProps, nextState) { //true if change of friends
  return(this.props.friends != nextProps.friends)
 }

getModal(event) {
  event.preventDefault()
  history.push('/friends/add')
}

handleChange(event){
  event.preventDefault();
  this.setState({
    friendshipIds: [...this.state.friendshipIds, event.target.value]
  })
  }

removeFriends(event) {
  event.preventDefault();
  this.props.actions.removeFriends(this.state.friendshipIds)
}

  render() {

    if(this.props.friends) {
      return(
        <div>
          <Form onChange={(event)=> this.handleChange(event)}>
          <Container style={{paddingTop: "15px"}}>
            <Row >
            <Col className="col-4" style={{paddingTop: "100px"}}>
              <h1>Friends!</h1>
            </Col>
              <FriendsList friendships={this.props.friends}/>
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
          <h1>Be Friendly!</h1>
          <Button>Add Friends</Button>
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
  if(state.friends.friends){
    return {
      friends: state.friends.friends.friends
    }}else {
      return {
        state
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
