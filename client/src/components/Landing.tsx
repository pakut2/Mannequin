import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendMessage } from "../actions/message";
import { setAlert } from "../actions/alert";

const Landing = ({ sendMessage, message: { loading, message } }: any) => {
  const [formData, setFormData] = useState({ text: "" });

  const { text } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    sendMessage(formData);
  };

  return (
    <Fragment>
      <h1 className="large">Mannequin</h1>
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <textarea
          rows={10}
          cols={50}
          placeholder="Compose your message here"
          name="text"
          value={text}
          onChange={(e) => {
            onChange(e);
          }}
          required
        ></textarea>
        <input type="submit" className="btn" value="Submit" />
      </form>
      {!loading && message !== null && (
        <p
          className="link lead text-center dark-overlay hide-sm"
          onClick={(e: any) => {
            e.target.classList.remove("dark-overlay");
          }}
        >
          {window.location.href}messages/
          {message._id}{" "}
          <i
            className="fa fa-clipboard large"
            aria-hidden="true"
            onClick={(e: any) => {
              navigator.clipboard.writeText(e.target.parentElement.innerText);
            }}
          ></i>
        </p>
      )}
    </Fragment>
  );
};

Landing.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  message: state.message,
});

export default connect(mapStateToProps, { sendMessage })(Landing);
