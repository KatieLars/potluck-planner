import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import history from '../history.js'

class PotluckCard extends Component {

handleClick(event){ //opens show page
  event.preventDefault()
  history.push(`potlucks/${this.props.potluck.id}`)
}

  render() {
    return (
      <div>
      <Card>
        <CardImg top width="100%" src={this.props.potluck.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.potluck.name}</CardTitle>
            <CardSubtitle><em>{this.props.potluck.happening}</em></CardSubtitle>
            <CardText>
              <p>Location: {this.props.potluck.location}</p>
              {this.props.potluck.description}
            </CardText>
            <Button onClick={(event)=> this.handleClick(event)}>More Info</Button>
          </CardBody>
      </Card>
      </div>
    )
  }
}

export default PotluckCard
