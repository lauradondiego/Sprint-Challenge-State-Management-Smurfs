import { getData } from "../actions/SmurfsActions";

import React, { Component } from "react";

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
      // const newSmurf = {
      //   name: this.state.name,
      //   age: this.state.age,
      //   height: this.state.height
      // };
    }
    console.log("new smurf post", this.state);
    // POST_SMURF_DATA_SUCCESS(newSmurf);
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

// export default class AddSmurf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurf: {
//         name: "",
//         age: "",
//         height: ""
//       }
//     };
//   }

//   changeHandler = event => {
//     event.preventDefault();
//     this.setState({
//       smurf: { ...this.state.smurf, [event.target.name]: event.target.value }
//     });
//   };

//   addSmurf = e => {
//     e.preventDefault();
//     // this.props.getData(this.state.smurf);
//     this.setState({ smurf: { name: "", age: "", height: "" } });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.addSmurf}>
//           <fieldset>
//             <legend>Add New Smurf</legend>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="name"
//               name="name"
//               id="name"
//               value={this.state.smurf.name}
//               onChange={this.changeHandler}
//             />
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               name="age"
//               id="age"
//               value={this.state.smurf.age}
//               onChange={this.changeHandler}
//             />
//             <label htmlFor="email">Height:</label>
//             <input
//               type="text"
//               name="height"
//               id="height"
//               value={this.state.smurf.height}
//               onChange={this.changeHandler}
//             />
//             <input type="submit" value="Add" />
//           </fieldset>
//         </form>
//       </div>
//     );
//   }
// }
