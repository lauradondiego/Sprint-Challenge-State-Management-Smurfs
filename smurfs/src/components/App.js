import "./App.css";
import React, { Component } from "react";
import SmurfsList from "./SmurfsList";
import SmurfsNewPost from "./SmurfsNewPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SmurfsNewPost
                smurfs={this.props.smurfs}
                getData={this.getData}
              />
            </div>
            <div className="col-md-6">{this.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
