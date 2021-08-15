import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboards from "./Pages/Dashboards/Dashboards";
import { Provider as Pro } from "react-redux";
import store from "./Redux/store";
import { useState } from "react";
import colors from "./data/colors";
import themeContext from "./themeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedColors, setSelectedColors] = useState(colors.dark);

  useEffect(() => {
    setSelectedColors(colors[theme]);
  });

  return (
    <Pro store={store}>
      <themeContext.Provider
        value={{ theme, setTheme, colors: selectedColors }}
      >
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
      </themeContext.Provider>
    </Pro>
  );
}

export default App;
