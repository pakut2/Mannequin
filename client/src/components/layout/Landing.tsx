import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Wave } from "./wave.svg";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/message";

const Landing = ({ sendMessage }: any) => {
  const [formData, setFormData] = useState({ message: "" });

  const { message } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function onSubmit(e: any) {
    e.preventDefault();
    sendMessage(formData);
  }

  return (
    <Fragment>
      <section>
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
            name="message"
            value={message}
            onChange={(e) => {
              onChange(e);
            }}
          ></textarea>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </section>
      <Wave className="wave" />
    </Fragment>
  );
};

Landing.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default connect(null, { sendMessage })(Landing);
