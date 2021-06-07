import { MESSAGE_SUCCESS, MESSAGE_FAIL } from "../actions/types";

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
      localStorage.setItem("id", payload._id);
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case MESSAGE_FAIL:
      localStorage.removeItem("id");
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
