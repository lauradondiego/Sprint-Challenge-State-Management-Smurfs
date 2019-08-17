import React from "react";

const Smurfs = props => {
  return (
    <div>
      <h4>Name: {props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <p>ID: {props.smurf.id}</p>
    </div>
  );
};

export default Smurfs;
