import React from "react";

class SmurfsNewPost extends React.Component {
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
    if (
      this.state.name.trim() &&
      this.state.age.trim() &&
      this.state.height.trim()
    ) {
      console.log("new smurf post", this.state);
      this.handleReset();
    }
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
            <textarea
              cols="19"
              rows="8"
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

export default SmurfsNewPost;
