import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions/SmurfsActions";

import Smurfs from "./Smurfs";

//connect to redux and import into index.js in src
const SmurfsList = props => {
  console.log("props", props);
  return (
    <>
      <h1>Welcome to My Smurf App!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          "Get Smurf Data"
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(data => <Smurfs key={data.name} smurf={data} />)}
      {/* <div>{props.postData}</div> */}
    </>
  );
};

const mapStateToProps = state => {
  console.log("state", state);

  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfsList);
