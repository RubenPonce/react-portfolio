import React from "react";
import "./App.css";
import Introduction from "./components/Introduction";

import {Services} from "./components/Services";
import {Projects} from "./components/Projects";

function Cta() {
    return (
        <div className="cta-container">
            <h2>Let's <a href="https://calendly.com/rubenponce/have-a-conversation">schedule a discovery call</a> and
                start building your project today!</h2>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <Introduction/>
            <Projects/>
            <Services/>
            <Cta/>
        </div>
    );
};

export default App;
