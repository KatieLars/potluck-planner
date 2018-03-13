import React, {Component} from 'react'
import {connect} from 'react-redux'



class PotluckShow extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.potluck.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if(state.potlucks.potlucks){
    const potluck = state.potlucks.potlucks.find(potluck => {
      return potluck.id == ownProps.match.params.id
    })
    return {potluck: potluck}
  }else{
    return {
      state
    }
  }
}

export default connect(mapStateToProps, null)(PotluckShow)
