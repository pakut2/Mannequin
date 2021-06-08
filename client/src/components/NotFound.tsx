import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
      <Link to="/" className="btn">
        Compose New Message
      </Link>
    </Fragment>
  );
};
