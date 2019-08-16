// import React, { Component } from "react";
// import React from "react";

import "./App.css";
import React, { Component } from "react";
import SmurfsList from "./SmurfsList";
import SmurfsNewPost from "./SmurfsNewPost";
// import { postSmurf, fetchSmurfs } from "../actions/SmurfsActions";
import { getData } from "../actions/SmurfsActions";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    // function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SmurfsNewPost
                smurfs={this.props.smurfs}
                // postSmurf={this.postSmurf}
                getData={this.getData}
              />
            </div>
            <div className="col-md-6">name={this.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
