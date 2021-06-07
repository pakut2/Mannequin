import axios from "axios";
import { MESSAGE_SUCCESS, MESSAGE_FAIL } from "./types";

export const sendMessage = (formData: Object) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("api/messages", formData, config);

    dispatch({
      type: MESSAGE_SUCCESS,
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
