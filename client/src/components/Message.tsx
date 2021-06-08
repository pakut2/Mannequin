import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NotFound } from "./NotFound";
import { connect } from "react-redux";
import { getMessage, deleteMessage } from "../actions/message";
import formatDate from "../utils/formatDate";

const Message = ({
  getMessage,
  deleteMessage,
  match,
  message: { loading, message },
}: any) => {
  useEffect(() => {
    getMessage(match.params.id);
  }, [getMessage]);

  if (!loading && message !== null) {
    {
      setTimeout(() => {
        deleteMessage(match.params.id);
      }, message.timeout);
    }
  }

  return (
    <Fragment>
      {loading || message === null ? (
        <NotFound />
      ) : (
        <Fragment>
          <div className="message">
            <h1 className="large">Message:</h1>{" "}
            <span className="lead">{message.text}</span>
          </div>
          <p>Created on: {formatDate(message.date)}</p>
          <Link to="/" className="btn btn-link">
            Compose New Message
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Message.propTypes = {
  getMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getMessage, deleteMessage })(Message);
