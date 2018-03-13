import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button} from 'reactstrap'
import history from '../history.js'

const cardStyle ={
  width: "30vw",
  display: "inline-block",
}

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center"
}

class PotluckCard extends Component {

handleClick(event){ //opens show page
  event.preventDefault()
  history.push(`potlucks/${this.props.potluck.id}`)
}

  render() {
    return (
      <Card className="mx-auto" style={subtitleStyle} >
        <CardImg top width="100%" src={this.props.potluck.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.potluck.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>{this.props.potluck.format_date}</CardSubtitle>
            <CardText>
              <p></p>
              <p><em>{this.props.potluck.format_time}</em></p>
              <p>Location: {this.props.potluck.location}</p>
              {this.props.potluck.description}
            </CardText>
            <CardFooter>
              <Button onClick={(event)=> this.handleClick(event)}>More Info</Button>
            </CardFooter>
          </CardBody>
      </Card>
    )
  }
}

export default PotluckCard
