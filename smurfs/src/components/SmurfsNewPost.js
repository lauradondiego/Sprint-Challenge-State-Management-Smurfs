import { postData } from "../actions/SmurfsActions";
import { connect } from "react-redux";

import React, { Component } from "react";

class SmurfsNewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postData(this.state);

    // if (
    //   this.state.name.trim() &&
    //   this.state.age.trim() &&
    //   this.state.height.trim()
    // ) {
    // const newSmurf = {
    //   name: this.state.name,
    //   age: this.state.age,
    //   height: this.state.height
    // };
    // }
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Age"
              className="form-control"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Height"
              className="form-control"
              name="height"
              onChange={this.handleInputChange}
              value={this.state.height}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Smurf
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);

  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { postData }
)(SmurfsNewPost);
