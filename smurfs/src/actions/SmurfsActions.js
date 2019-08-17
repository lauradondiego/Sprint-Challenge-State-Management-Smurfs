import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";

export const POST_SMURF_DATA_START = "POST_SMURF_DATA_START";
export const POST_SMURF_DATA_SUCCESS = "POST_SMURF_DATA_SUCCESS";
export const POST_SMURF_DATA_FAILURE = "POST_SMURF_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("smurf data response", response.data);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: error.response });
      });
  };
};

export const postData = newSmurf => dispatch => {
  console.log("post data function", postData);
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log("smurf data post", response.data);
      dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: POST_SMURF_DATA_FAILURE,
        payload: error.response
      });
    });
};
