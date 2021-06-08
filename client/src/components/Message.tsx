import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Spinner } from "./Spinner";
import { connect } from "react-redux";
import { getMessage } from "../actions/message";

const Message = ({ getMessage, match, message: { loading, message } }: any) => {
  useEffect(() => {
    getMessage(match.params.id);
  }, [getMessage]);
  return (
    <Fragment>
      {" "}
      {loading ? <Spinner /> : <Fragment>{message.text}</Fragment>}
    </Fragment>
  );
};

Message.propTypes = {
  getMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getMessage })(Message);
