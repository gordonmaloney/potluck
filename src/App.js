import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import MainMenu from "./components/mainmenu";
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced,
    essentials: state.essentials
  };
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
    return (
      <Container>
        <Row>
          <h2>Potluck</h2>
        </Row>
        <Row>
          <MainMenu />
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(App);
