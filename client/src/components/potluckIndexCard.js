import React, {Component} from 'react'
import { CardLink, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, CardText, Button} from 'reactstrap'
import history from '../history'


class PotluckIndexCard extends Component {

  potluckShowPage(event){ //opens show page DONE
    event.preventDefault()
    history.push(`/potlucks/${this.props.potluck.id}`)
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default PotluckIndexCard
