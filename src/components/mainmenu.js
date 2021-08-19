import React from "react";
import { Row, Col } from "reactstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreatePotluck from "./createpotluck";
import YourPotlucks from "./yourpotlucks";

function MainMenu() {
  return (
    <BrowserRouter>
      <Row>
        <Link to="/createpotluck">Create a potluck</Link>
        <Link to="/yourpotlucks">Your potlucks</Link>
      </Row>


      <Switch>
          <Route path="/createpotluck">
            <CreatePotluck />
          </Route>
          <Route path="/yourpotlucks">
            <YourPotlucks />
          </Route>
        </Switch>

    </BrowserRouter>
  );
}

export default MainMenu;
