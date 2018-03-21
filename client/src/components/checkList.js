import React, {Component} from 'react'
import {Label, Form, FormGroup, Input, Container, Row, CardDeck} from 'reactstrap'
import {connect} from 'react-redux'

const cardDecks = {
  columnGap: "1rem",
  columnCount: "3"
}
//either selecting guests or selecting recipes
class CheckList extends Component {
  filterList() {
    return this.props.list.filter(item => item !== null)
  }

  checklistItem() {
    const filteredList = this.filterList()
      return filteredList.map((item) => (
        <FormGroup check>
         <Label check>
           <Input type="checkbox" value={item.id} />{' '}
            {item.username ? (item.username) : (item.name)}
         </Label><br></br>
       </FormGroup>
      )
    )}

  render() {
    return (
      <div>
        {this.checklistItem()}
      </div>
    )
  }
}

export default CheckList
