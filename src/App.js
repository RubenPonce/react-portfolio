import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import data from "./data";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={(props) => (
          <>
            <Navigation {...props} />
            <Introduction />
            <Projects {...props} projects={data} />
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={(props) => (
          <>
            <Navigation {...props} />
            <About />
          </>
        )}
      />
    </div>
  );
};

export default App;
