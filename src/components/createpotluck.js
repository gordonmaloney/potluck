import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import CrazyTags from './crazytags';

export default function CreatePotluck() {
    
  return (
    <div>




      <Card>
        <CardHeader>
          <h1>Create a new potluck</h1>
        </CardHeader>
        <CardBody>
          <LocalForm>
            <Control.text
              model=".title"
              id="title"
              placeholder="Title"
              className="form-control"
            />
            <br />
            {/*make this a control*/}
            <input type="date" className="form-control" />
            <br />
            <Control.text
              model=".theme"
              id="theme"
              placeholder="Theme"
              className="form-control"
            />

            <br />

            <CrazyTags />
            <br />
            <Button color="secondary" className="mx-2 btn-lg float-end">
              Cancel
            </Button>
            <Button color="primary" className="mx-2 float-end btn-lg">
              Create
            </Button>


          </LocalForm>
        </CardBody>
      </Card>
    </div>
  );
}
