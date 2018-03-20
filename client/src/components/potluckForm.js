import React from 'react'
import {Label, FormGroup, Input, Col, Button} from 'reactstrap'

const PotluckForm = ({ potluck }) => {
  return(
    <Col style={{marginLeft: "25px"}}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder={potluck ? (potluck.name) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="location" name="location" id="location" placeholder={potluck ? (potluck.location) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="text" name="date" id="date" placeholder={potluck ? (potluck.format_date) : (null)} />
      </FormGroup>
      <FormGroup>
        <Label for="time">Time</Label>
        <Input type="datetime" name="time" id="time" placeholder={potluck ? (potluck.format_time) : (null)}/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" placeholder={potluck ? (potluck.description) : (null)}/>
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="text" name="image" id="image" placeholder={potluck ? (potluck.image) : (null)}/>
      </FormGroup>
    </Col>
  )
}

export default PotluckForm
