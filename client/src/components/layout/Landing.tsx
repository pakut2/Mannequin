import React, { Fragment } from "react";
import { ReactComponent as Wave } from "./wave.svg";

const Landing = () => {
  return (
    <Fragment>
      <section>
        <h1 className="large">Mannequin</h1>
        <form className="form">
          <textarea
            rows={10}
            cols={50}
            placeholder="Compose your message here"
          ></textarea>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </section>
      <Wave className="wave" />
    </Fragment>
  );
};

export default Landing;
