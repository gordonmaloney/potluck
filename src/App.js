import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import MainMenu from "./components/mainmenu";
import { connect } from "react-redux";
import PotluckList from "./components/PotluckList";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced.PotlucksReducer,
    essentials: state.ActionsReduced.EssentialsReducer
  };
}

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h2>Potluck</h2>
        </Row>
        <Row>
          <MainMenu />
        </Row>
        <Row>
          <PotluckList />
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(App);
