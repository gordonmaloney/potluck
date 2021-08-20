import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced.PotlucksReducer,
    essentials: state.ActionsReduced.EssentialsReducer,
  };
}

class PotluckList extends Component {
  list() {
    return this.props.potlucks.map((potluck) => {
      return (
        <>
        <li>
          <b>Potluck details:</b> {potluck.potluckTitle} - {potluck.potluckDate} -{" "}
          {potluck.potluckTheme}
        </li>
        <li className="mb-4"><b>Essentials:</b>{potluck.essentials.map((essential, index) => {
return <> {essential}{index !== potluck.essentials.length-1 ? "," : ""} </> } ) }</li>

        </>
      );
    });
  }

  /*essentials() {
    return this.props.essentials.map((essentialObj) => {
      return essentialObj.essentials.map((essential) => {
        return (
          <>
            {essentialObj.potluckTitle} - {essential}
            <br />
          </>
        );
      });
    });
  }*/

/*
essentials() {
    return this.props.essentials.map((essentialObj) => {
        return (
          <>
            {essentialObj.potluckTitle} - {essentialObj.essentials.map((essential, index) => {
return <> {essential}{index !== essentialObj.essentials.length-1 ? "," : ""} </> } ) }
            <br />
          </>
        );
    });
  }
*/
  render() {
    return (
      <>
        <>
          {this.list()}
        </>
      </>
    );
  }
}

export default connect(mapStateToProps)(PotluckList);
