import React from 'react'
import {Label, FormGroup, Input, Col} from 'reactstrap'

const PotluckForm = ({ potluck }) => {
  return(
    <Col className="col-4" style={{marginLeft: "25px"}}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder={this.props.potluck ? (this.props.potluck.name) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="location" name="location" id="location" placeholder={this.props.potluck ? (this.props.potluck.location) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="text" name="date" id="date" placeholder={this.props.potluck ? (this.props.potluck.format_date) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="time">Time</Label>
        <Input type="datetime" name="time" id="time" placeholder={this.props.potluck ? (this.props.potluck.format_time) : (null)}/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" placeholder={this.props.potluck ? (this.props.potluck.description) : (null)}/>
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="text" name="image" id="image" placeholder={this.props.potluck ? (this.props.potluck.image) : (null)}/>
      </FormGroup>
    </Col>
  )
}

export default PotluckForm
