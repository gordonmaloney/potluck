import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced,
    essentials: state.essentials,
  };
}

class PotluckList extends Component {
  constructor(props) {
    super(props);
  }

  list() {
    return this.props.potlucks.PotlucksReducer.map((potluck) => {
      return <li>{potluck.potluckTitle}</li>;
    });
  }

  render() {
    console.log(this.props.potlucks.PotlucksReducer);
    return (
      <>
        <>
          test
          {this.props.potlucks.PotlucksReducer.length}
          {this.list()}{" "}
        </>
      </>
    );
  }
}

export default connect(mapStateToProps)(PotluckList);
