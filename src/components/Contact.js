import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"
import { Form, Label, Input, Button } from "reactstrap";
import {Link} from "react-router-dom";
import Footer from "./Footer";
const ContactFormDiv = styled.form`
max-width: 650px;
margin: 0 auto;
display: flex;
flex-direction: column;
padding-bottom: 4em;
  h2{
  text-align: center;
  margin: 3em 0 0 0;
  color: #efefef;
  font-weight: 600;
  }
   .button-container {
   display: flex;
   justify-content: space-between;
       button{
      border: transparent;
      width: 200px;
      border-radius: .25em;
      padding: .75em .5em;
      margin: .75em 0;
      }
  }
div{
  label{
    display: block;
    text-align: left;
    color: #efefef;
    font-size: 1.2rem;
    text-transform: uppercase
    letter-spacing: 1px;
    margin: 1em 0;
  }
  input, textarea{
    width: 100%;
    margin: .5em 0;
    font-size: 1.2rem;
    padding: .75em;
    border-radius: .3em;
    color: #495057;
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
    return (
      <ContactFormDiv>
        <h2>Contact:</h2>
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
            >
              {this.state.ButtonText}
            </button>
                <Link to="/"> <button>cancel</button></Link>
            </div>
        </form>
        <Footer />
      </ContactFormDiv>
    );
  }
}

export default Contact;
