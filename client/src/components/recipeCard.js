import React, {Component} from 'react'
import { CardLink, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

class RecipeCard extends Component {
  constructor() {
    super()
    this.state = {
      votes: 0
    }

    //this.handleClick = this.handleClick.bind(this)
  }


  handleClick = () => {
    this.setState({
      votes: ++this.state.votes
    })
  }

  callApi = () => {
    console.log('a')
    fetch('http://localhost:3001/friendships/friendsjsjdk', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      })
    }).then(response => {
        if(!response.ok) {
          throw new Error(response.statusText)
        }else{
        console.log('b')
        return response.json()
      }
    }).then(response => {
      console.log('c', response)
    }).catch(error => {
      console.log('d', error);
    })
    console.log('e')

    // a e b c + response

    // a e d + error
  }

  render() {
    const { recipe } = this.props
    return (
      <div>
        <CardImg top width="100%" src={recipe.image} alt="Recipe Image" />
          <CardBody>
            <CardTitle>{recipe.name}</CardTitle>
            <CardSubtitle style={{fontSize: "0.7em"}}>Difficulty: {recipe.difficulty}</CardSubtitle>
            <CardLink href={recipe.url}>Get Recipe</CardLink>
            <Button onClick={this.handleClick}>Vote Up! </Button>
            <Button onClick={this.callApi}>Call Api</Button>
            <p>Votes: {this.state.votes}</p>
          </CardBody>
      </div>
    )
  }
}

export default RecipeCard
