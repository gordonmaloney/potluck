import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { connect } from "react-redux";
import CrazyTags from "./crazytags";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced.PotlucksReducer,
    essentials: state.ActionsReduced.EssentialsReducer,
  };
}

class YourPotlucks extends Component {
  PotluckCard() {
    console.log(this.props.potlucks);
    return this.props.potlucks.map((potluck) => {
      return (
        <>
          <Card className="mb-3">
            <CardHeader>
              <h3>{potluck.potluckTitle}</h3>
              {potluck.potluckDate} <br />
              <b>Theme: </b>
              {potluck.potluckTheme} <br />
              <b>Essentials:</b>
              {potluck.essentials.map((essential, index) => {
                return (
                  <>
                    {" "}
                    {essential}
                    {index !== potluck.essentials.length - 1 ? "," : ""}{" "}
                  </>
                );
              })}
            </CardHeader>
            <CardBody>
              <h4>What are you bringing?</h4>
              <LocalForm>

              <CrazyTags />

                <Button color="primary" className="mx-2 mt-3 float-end">
                  Confirm
                </Button>
              </LocalForm>
            </CardBody>
          </Card>
        </>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Your potlucks</h2>
        {this.PotluckCard()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(YourPotlucks);
