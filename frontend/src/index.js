import React from "react";
import ReactDOM from "react-dom";

// Store
import { Provider } from "react-redux";
import store from "./store";

// Pages
import DataContainer from "./pages/DataContainer";

// Css
import "./assets/scss/main.css";

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.css";

// Font Awesome
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

ReactDOM.render(
  <Provider store={store}>
    <DataContainer />
  </Provider>,
  document.getElementById("root")
);
