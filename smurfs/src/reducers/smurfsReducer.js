import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  POST_SMURF_DATA_START,
  POST_SMURF_DATA_SUCCESS,
  POST_SMURF_DATA_FAILURE
} from "../actions";
const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        smurfs: [],
        error: action.payload
      };
    case POST_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_SMURF_DATA_SUCCESS:
      console.log("post action", action);
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case POST_SMURF_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
