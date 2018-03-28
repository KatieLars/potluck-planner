import React from 'react'
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'


const PotluckCard = ( props) => {
    return (
      <div>
        <CardImg top width="100%" style={{opacity: "1.0"}} src={props.potluck.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{props.potluck.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>{props.potluck.format_date}</CardSubtitle>
            <CardText>
              <p></p>
              <p><em>{props.potluck.format_time}</em></p>
              <p>Location: {props.potluck.location}</p>
              {props.potluck.description}
            </CardText>
          </CardBody>
          {props.children}
      </div>
    )
}

export default PotluckCard
