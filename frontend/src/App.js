import React from "react";
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Main from "./pages/Main";

// Css
import "./assets/scss/main.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
