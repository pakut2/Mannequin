import axios from "axios";
import { setAlert } from "./alert";
import {
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
  GET_MESSAGE,
  DELETE_MESSAGE,
} from "./types";

// Send message
export const sendMessage = (formData: Object) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/messages", formData, config);

    dispatch({
      type: MESSAGE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Message Composed", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MESSAGE_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get message by ID
export const getMessage = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(`/api/messages/${id}`);

    dispatch({
      type: GET_MESSAGE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Delete message
export const deleteMessage = (id: any) => async (dispatch: any) => {
  try {
    await axios.delete(`/api/messages/${id}`);

    dispatch({
      type: DELETE_MESSAGE,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
