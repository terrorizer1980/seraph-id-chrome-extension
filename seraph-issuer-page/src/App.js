import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import IssuerPage from "./scenes/IssuerPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: "90px" }}>
          <Route exact path="/" component={IssuerPage} />
          <Route path="/government" component={IssuerPage} />
          <Route path="/topics" component={IssuerPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
