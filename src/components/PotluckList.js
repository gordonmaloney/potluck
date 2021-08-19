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
        <li>
          {potluck.potluckTitle} - {potluck.potluckDate} -{" "}
          {potluck.potluckTheme}
        </li>
      );
    });
  }

  essentials() {
    return this.props.essentials.map((essential) => {
      return (
        <li>
          {essential.essentials}
        </li>
      );
    });
  }

  render() {
    console.log("testttt", this.props.essentials)

    return (
      <>
        <>
          Essentials: {this.props.essentials.length}
          <br />
          {this.list()}{" "}
          {this.essentials()}
        </>
      </>
    );
  }
}

export default connect(mapStateToProps)(PotluckList);
