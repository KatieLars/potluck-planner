import React, {Component} from 'react'
import { CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, CardText, Button, Card} from 'reactstrap'
import history from '../history'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class PotluckIndexCard extends Component {

  potluckShowPage(event){
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}`)
  }

  render() {
    return (
      <Card style={subtitleStyle} >
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
        </CardBody>
        <CardFooter>
          <Button onClick={(event)=> this.potluckShowPage(event)}>More Info</Button>
        </CardFooter>
      </Card>
    )
  }
}

export default PotluckIndexCard
