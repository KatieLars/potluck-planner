import React, {Component} from 'react'
import {connect} from 'react-redux'



class PotluckShow extends Component {

  render() {
    return (
      <div>
        {this.props.potluck.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const potluck = state.potlucks.find(potluck => {
    return potluck.id == ownProps.match.params.potluckId
  })
}

export default connect(mapStateToProps, null)(PotluckShow)
