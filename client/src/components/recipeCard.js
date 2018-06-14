import React, {Component} from 'react'
import { CardLink, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

class RecipeCard extends Component {


  render() {
    const { recipe } = this.props
    return (
      <div>
        <CardImg top width="100%" src={recipe.image} alt="Recipe Image" />
          <CardBody>
            <CardTitle>{recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {recipe.difficulty}</CardSubtitle>
            <CardLink href={recipe.url}>Get Recipe</CardLink>
          </CardBody>
      </div>
    )
  }
}

export default RecipeCard
