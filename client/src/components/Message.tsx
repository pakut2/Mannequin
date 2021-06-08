import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Spinner } from "./Spinner";
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

  if (loading || message === null) {
    return <NotFound />;
  }

  return (
    <Fragment>
      {loading || message === null ? (
        <Spinner />
      ) : (
        <Fragment>
          Message: {message.text} Created on: {formatDate(message.date)}
          {setTimeout(() => {
            deleteMessage(match.params.id);
          }, 3000)}
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
