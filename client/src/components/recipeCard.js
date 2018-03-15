import React, {Component} from 'react'
import { CardLink, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

class RecipeCard extends Component {

  render() {
    return (
      <div>
        <CardImg top width="100%" src={this.props.recipe.image} alt="Potluck Image" />
          <CardBody>
            <CardTitle>{this.props.recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {this.props.recipe.difficulty}</CardSubtitle>
            <CardLink href={this.props.recipe.url}>Get Recipe</CardLink>
          </CardBody>
      </div>
    )
  }
}

export default RecipeCard
