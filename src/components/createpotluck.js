import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import CrazyTags from "./crazytags";
import { connect } from "react-redux";
import { addPotluck } from "./redux/AddPotluck";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced.PotlucksReducer,
    essentials: state.ActionsReduced.EssentialsReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPotluck: (title, date, theme, essentials) => dispatch(addPotluck(title, date, theme, essentials)),
  };
};

class CreatePotluck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      theme: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("final essentials: ", this.props.essentials[0].essentials)
    this.props.handleAddPotluck(values.title,values.date, values.theme, this.props.essentials[0].essentials);
  }

  
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h1>Create a new potluck</h1>
          </CardHeader>
          <CardBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Control.text
                model=".title"
                id="title"
                placeholder="Title"
                className="form-control"
              />
              <br />
              {/*make this a control*/}
              <Control
                model=".date"
                id="date"
                type="date"
                className="form-control"
              />
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
              <Button
                type="submit"
                color="primary"
                className="mx-2 float-end btn-lg"
              >
                Create
              </Button>
            </LocalForm>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePotluck);
