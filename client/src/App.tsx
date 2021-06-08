import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import Landing from "./components/Landing";
import Message from "./components/Message";
import { NotFound } from "./components/NotFound";
import { ReactComponent as Wave } from "./components/wave.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/messages/:id" component={Message} />
              <Route component={NotFound} />
            </Switch>
          </section>
          {/* <Wave className="wave" /> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// TODO
// Transparent loading
// UI
// Delete msg
//? URL shortener
