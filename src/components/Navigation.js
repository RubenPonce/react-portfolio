import React, { Component } from "react";
// import {Link} from "react-router-dom";
export default class Navigation extends Component {
  handleScroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 15) {
      header.classList.add("scroll-effect");
      if (header.classList.contains("remove-scroll")) {
        header.classList.remove("remove-scroll");
      }
    } else {
      header.classList.replace("scroll-effect", "remove-scroll");
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    // const {pathname} = this.props.history.location
    return (
      <div className="header">
        <div className="nav">
          {/* {pathname ==="/about" ? <Link to="/">Home</Link> : pathname==="/" ?  <Link to="/about">About</Link> : <Link to="/">Home</Link>  } */}
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ruben-ponce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.github.com/rubenponce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
{/*  <a
            href="https://twitter.com/RubenMPonce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>*/}
        </div>
      </div>
    );
  }
}
