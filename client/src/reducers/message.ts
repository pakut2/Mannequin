import {
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  GET_MESSAGE,
  DELETE_MESSAGE,
} from "../actions/types";

const initialState = {
  message: null,
  loading: true,
  error: {},
};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;

  switch (type) {
    case MESSAGE_SUCCESS:
    case GET_MESSAGE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
      };
    case MESSAGE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        message: null,
      };
    default:
      return state;
  }
}
