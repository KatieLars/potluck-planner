import React, {Component} from 'react'
import { CardImgOverlay, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Card} from 'reactstrap'
import cancelled from '../images/cancelled.jpg'

const subtitleStyle = {
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

class canceledPotluckCard extends Component {

  render() {
    return (
      <Card style={subtitleStyle} >
       <CardImg style={{opacity: "0.60"}} src={cancelled} />
       <CardImgOverlay>
        <CardBody>
          <CardTitle><strong>{this.props.potluck.name}</strong></CardTitle>
          <CardSubtitle style={{fontSize: "0.7em"}}><strong>{this.props.potluck.format_date}</strong></CardSubtitle>
          <CardText>
            <p></p>
            <p><em><strong>{this.props.potluck.format_time}</strong></em></p>
          </CardText>
        </CardBody>
        </CardImgOverlay>
      </Card>
    )
  }
}

export default canceledPotluckCard
