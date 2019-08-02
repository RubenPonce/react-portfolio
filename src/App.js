import React, { Component } from "react";
import "./App.css";
import data from "./data";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import BottomContent from "./components/BottomContent"
export class App extends Component {
  state = {
    projects: data
  };


  render() {
    return (
      <div className="App">

        <Route
          exact
          path="/"
          render={props => {
            return (
              <div>
                <Navigation {...props} />
                <Introduction />
                <Projects {...props} projects={this.state.projects} />
                <BottomContent />
              </div>
            );
          }}
        />
        <Route exact path="/contact" render={(props)=>{
          return (<div>
           <Navigation {...props} />
          <Contact/>
          </div>)
          }
          }/>
      </div>
    );
  }
}

export default App;
