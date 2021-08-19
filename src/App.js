import React from "react";
import { Container, Row, Col } from "reactstrap";
import MainMenu from './components/mainmenu';

function App() {
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

export default App;
