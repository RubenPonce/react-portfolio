import React from "react";
import "./App.css";

import {Projects} from "./components/Projects";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import {Services} from "./components/Services";

function Cta() {
    return (
        <div className="cta-container">
            <h2>Let's <a href="https://calendly.com/rubenponce/have-a-conversation" >schedule a discovery call</a> and start building your project today!</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Introduction/>
            <Projects/>
            <Services/>
            <Cta />
        </div>
    );
};

export default App;
