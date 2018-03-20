import React from 'react'
import { CardImgOverlay, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Card} from 'reactstrap'
import cancelled from '../images/cancelled.jpg'

const subtitleStyle = {
  textAlign: "center",
  width: "30vw",
  display: "inline-block",
  marginTop: "1.25rem"
}

const canceledPotluckCard = ({potluck}) => {
    return (
      <Card style={subtitleStyle} >
       <CardImg style={{opacity: "0.60"}} src={cancelled} />
       <CardImgOverlay>
        <CardBody>
          <CardTitle><strong>{potluck.name}</strong></CardTitle>
          <CardSubtitle style={{fontSize: "0.7em"}}><strong>{potluck.format_date}</strong></CardSubtitle>
          <CardText>
            <p></p>
            <p><em><strong>{potluck.format_time}</strong></em></p>
          </CardText>
        </CardBody>
        </CardImgOverlay>
      </Card>
    )
}

export default canceledPotluckCard
