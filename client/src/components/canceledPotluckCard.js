import React, {Component} from 'react'
import { CardImgOverlay, CardLink, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, CardText, Button, Card} from 'reactstrap'
import history from '../history'
import cancelled from '../images/cancelled.jpg'

const subtitleStyle = {
  opacity: "0.60",
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class canceledPotluckCard extends Component {

  render() {
    return (
      <Card style={subtitleStyle} >
       <CardImg style={{opacity: "0.60"}}><img src={cancelled}/></CardImg>
       <CardImgOverlay>
        <CardBody>
          <CardTitle>{this.props.potluck.name}</CardTitle>
          <CardSubtitle style={{fontSize: "0.7em"}}>{this.props.potluck.format_date}</CardSubtitle>
          <CardText>
            <p></p>
            <p><em>{this.props.potluck.format_time}</em></p>
          </CardText>
        </CardBody>
        </CardImgOverlay>
      </Card>
    )
  }
}

export default canceledPotluckCard
