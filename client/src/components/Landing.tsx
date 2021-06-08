import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendMessage } from "../actions/message";

const Landing = ({ sendMessage, message: { loading, message } }: any) => {
  const [formData, setFormData] = useState({ text: "", timeout: 5000 });

  const [displayInputs, toggleInputs] = useState(false);

  const { text, timeout } = formData;

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
        <div className="select">
          <button
            onClick={() => {
              toggleInputs(!displayInputs);
            }}
            type="button"
            className="btn"
          >
            Specify Self-Destruct Time Period
          </button>

          {displayInputs && (
            <Fragment>
              <select
                value={timeout}
                name="timeout"
                onChange={(e) => onChange(e)}
              >
                <option value="5000">5s</option>
                <option value="10000">10s</option>
                <option value="15000">15s</option>
                <option value="30000">30s</option>
                <option value="60000">60s</option>
              </select>
            </Fragment>
          )}
        </div>
        <input type="submit" className="btn" value="Submit" />
      </form>
      {!loading && message !== null && (
        <p
          className="link lead text-center dark-overlay"
          onClick={(e: any) => {
            e.target.classList.remove("dark-overlay");
            e.target.style.color = "#11272b";
          }}
        >
          <span className="hide-sm">
            {window.location.href}messages/{message._id}
          </span>{" "}
          <i
            className="fa fa-clipboard large"
            aria-hidden="true"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location}messages/${message._id}`
              );
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
