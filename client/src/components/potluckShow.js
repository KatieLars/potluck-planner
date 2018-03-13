import React, {Component} from 'react'
import {connect} from 'react-redux'
import PotluckCard from './potluckCard'



class PotluckShow extends Component {

  render() {
    return (
      <div>
        <h1>PotluckCard potluck={this.props.potluck}</h1>
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
