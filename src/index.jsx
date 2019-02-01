import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById("app")
);
