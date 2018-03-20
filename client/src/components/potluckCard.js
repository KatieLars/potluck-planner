import React from 'react'
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'


const PotluckCard = ({ potluck }) => {
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
      </div>
    )
}

export default PotluckCard
