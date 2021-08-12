import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboards from "./Pages/Dashboards/Dashboards";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard/home"></Redirect>
          </Route>
          <Route path="/dashboard/:page" exact>
            <Dashboards />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
