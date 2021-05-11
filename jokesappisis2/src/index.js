import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Joke from "./components/joke";

ReactDOM.render(
  <React.StrictMode>
    <Joke />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
