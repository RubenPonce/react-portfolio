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

function Footer() {
    return <p style={{
        textAlign: "center",
        marginTop: "1em",
        marginBottom: "1em",
        color: "#fff",
        fontSize: "1.2rem",
    }}>Design by Ruben Ponce | A TITRATE LLC Enterprise</p>
}

const App = () => {
    return (
        <div className="App">
            <Introduction/>
            <Projects/>
            <Services/>
            <Cta/>
            <Footer />
        </div>
    );
};

export default App;
