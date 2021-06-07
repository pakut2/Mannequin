import React, { Fragment } from "react";
import Landing from "./components/layout/Landing";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Landing />
      </Fragment>
    </Provider>
  );
};

export default App;
