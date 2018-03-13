import React, {Component} from 'react'
import {Label, FormGroup, Input, Col} from 'reactstrap'

const PotluckForm = () => {
  return(
    <Col className="col-4" style={{padding: "0px"}}>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" id="name" />
    </FormGroup>
    <FormGroup>
      <Label for="location">Location</Label>
      <Input type="location" name="location" id="location" />
    </FormGroup>
    <FormGroup>
      <Label for="date">Date</Label>
      <Input type="datetime" name="date" id="date" />
    </FormGroup>
    <FormGroup>
      <Label for="time">Time</Label>
      <Input type="datetime" name="time" id="time"/>
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="text" name="description" id="description" />
    </FormGroup>
    <FormGroup>
      <Label for="image">Image</Label>
      <Input type="text" name="image" id="image"/>
    </FormGroup>
    </Col>
  )
}

export default PotluckForm
