import React from 'react'
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'


const PotluckCard = ({ potluck }) => {
    return (
      <div>
        <CardImg top width="100%" style={{opacity: "1.0"}} src={potluck.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{potluck.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>{potluck.format_date}</CardSubtitle>
            <CardText>
              <p></p>
              <p><em>{potluck.format_time}</em></p>
              <p>Location: {potluck.location}</p>
              {potluck.description}
            </CardText>
          </CardBody>
      </div>
    )
}

export default PotluckCard
