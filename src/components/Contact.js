import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"
import {Link} from "react-router-dom";
import Footer from "./Footer";
import {humbleBlack, slightTechBlue} from "./ResponsiveVars";
import Navigation from "./Navigation";


const ContactFormDiv = styled.div`
max-width: 750px;
margin: 0 auto;
display: flex;
flex-direction: column;
background: #f0f0f0;
padding: 2em 5em;
width: 100%;
border-radius: .5em;
 height: auto;
 box-shadow: 6px 8px 42px 1px rgba(0,0,0,.15);
  h2{
  text-align: center;
  color: ${humbleBlack};
  font-weight: 600;
  font-size: 2.0rem;
  }
   .button-container {
   display: flex;
   justify-content: space-between;
   #cta-btn{
   background: ${slightTechBlue};
   color: ${humbleBlack};
   }
       button{
      border: transparent;
      width: 200px;
      background: transparent;
      border-radius: .25em;
      padding: .75em .5em;
      margin: .75em 0;
      font-size: 1.3rem;
      }
  }
div{
  label{
    display: block;
    text-align: left;
    color: ${humbleBlack};
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1.5em 0 0 0;
  }
  input, textarea{
    width: 100%;
    margin: 0 0 .5em 0;
    font-size: 1.4rem;
    padding: .75em;
    border-radius: .3em;
    color: ${humbleBlack};
    background: rgb(247, 247, 247);
  }
  textarea{
    margin: 0 0 2em 0; 
  }
 
}

`
/*
.contact-form
.contact-form input,
.contact-form textarea {
  margin: 1em auto;
  width: 40%;
}
.contact-form form {
  display: flex;
  flex-direction: column;
}
.contact-form label {
  font-size: 1.3em;
  color: #efefef;
  margin-bottom: 1em 0;
}
.footer-container {
  margin: 1.5em 2em;
  text-align: left;
}
.footer-container a {
  text-align: left;
  color: #efefef;
  margin-top: 1.5em;
  padding: 0.75em;
  text-decoration: none;
}
* */
class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    ButtonText: "Send Message"
  };

  FormSubmit = e => {
    e.preventDefault();

    this.setState({
      ButtonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("https://formcarry.com/s/FZiCGxWL6oO", data, {
        headers: { Accept: "application/json" }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(err => {
        console.log("Message not sent", err);
      });
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      ButtonText: "Message Sent"
    });
  };

  render() {
    return (<div>
            <Navigation />
    <div style={{padding: "9em 0 6em 0"}}>
      <ContactFormDiv>
        <h2>Contact Me</h2>
        <form onSubmit={e => this.FormSubmit(e)}>
            <div>
                <label className="message-name" htmlFor="message-name">
                    Name
                </label>
                <input
                    onChange={e => this.setState({ name: e.target.value })}
                    name="name"
                    className="message-name"
                    type="text"
                    value={this.state.name}
                />
            </div>


          <div>
            <label className="message-email" htmlFor="message-email">
              Email
            </label>
            <input
              onChange={e => this.setState({ email: e.target.value })}
              name="email"
              id="message-email"
              className="message-email"
              type="email"
              required
              value={this.state.email}
            />
          </div>
            <div>
                <label className="message" htmlFor="message-Input">
                    Message
                </label>

                <textarea
                    onChange={e => this.setState({ message: e.target.value })}
                    name="message"
                    className="message-Input"
                    type="text"
                    value={this.state.message}
                    required
                />
            </div>
            <div className="button-container">
            <button
              type="submit"
              className="contact-form-btn"
              color={!this.state.sent ? "secondary" : "success"}
              id="cta-btn"
            >
              {this.state.ButtonText}
            </button>
                <Link to="/"> <button>Cancel</button></Link>
            </div>
        </form>

      </ContactFormDiv>

    </div>
            <Footer />
        </div>
    );

  }
}

export default Contact;
