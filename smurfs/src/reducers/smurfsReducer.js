import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS
  // FETCH_WEBCAM_DATA_FAILURE
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
        //   cats: action.payload.all,
        smurfs: action.payload,
        error: ""
      };
    default:
      return state;
  }
};
