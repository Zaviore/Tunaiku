import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./component/home";
import People from "./component/People";
import Detail from "./component/Detail";
import tes from "./component/tes";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
