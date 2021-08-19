import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { Control, LocalForm, Label } from "react-redux-form";

export default function YourPotlucks() {
  return (
    <div>
      <h2>Your potlucks</h2>

      <Card>
        <CardHeader>
          <h1>Gordon's birthday potluck</h1>
          <b>Date</b>: 10/08/1990
          <br />
          <b>Time</b>: 14:00
          <br />
          <b>Location</b>: Gordon's flat
          <br />
          <b>Theme:</b> Mexican
          <br />
          <b>Essentials:</b> Tortillas, salsa, guacamole
        </CardHeader>
        <CardBody>
            <h4>What are you bringing?</h4>
            <LocalForm>
            <Control.text
              model=".imbringing"
              id="imbringing"
              placeholder="I'm bringing..."
              className="form-control"
            />
            <Button color="primary" className="mx-2 mt-3 float-end">
              Confirm
            </Button>
            </LocalForm>
        </CardBody>
        <CardFooter>
            <h5>Who's bringing what?</h5>
            <ul>
                <li>Mike Williamson: arroz rojo, chips and dip</li>
                <li>Kirsty Haigh: pork carnitas</li>
                <li>James McAsh: lettuce, cheese, sour cream</li>


            </ul>
        </CardFooter>
      </Card>
    </div>
  );
}
