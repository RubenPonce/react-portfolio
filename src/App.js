import React from "react";
import "./App.css";

import {Projects} from "./components/Projects";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";

const App = () => {
    console.log("App.js");
  return (
    <div className="App">
            <Navigation />
            <Introduction />
            <Projects   />
      />
    </div>
  );
};

export default App;
