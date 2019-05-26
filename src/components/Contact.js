import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Input, Button } from "reactstrap";
import Footer from "./Footer";
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
      <div className="contact-form">
        <h2>Contact:</h2>
        <Form onSubmit={e => this.FormSubmit(e)}>
          <div className="input-label-containers">
            <div className="text-input">
              <Label className="message" htmlFor="message-Input">
                Your Message
              </Label>

              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                name="message"
                className="message-Input"
                type="text"
                placeholder="Please write your message here"
                value={this.state.message}
                required
              />
            </div>
          </div>
          <div className="input-label-containers">
            <Label className="message-name" htmlFor="message-name">
              Your Name
            </Label>
            <Input
              onChange={e => this.setState({ name: e.target.value })}
              name="name"
              className="message-name"
              type="text"
              placeholder="Your Name"
              value={this.state.name}
            />

            <Label className="message-email" htmlFor="message-email">
              Your Email
            </Label>
            <Input
              onChange={e => this.setState({ email: e.target.value })}
              name="email"
              className="message-email"
              type="email"
              placeholder="your@email.com"
              required
              value={this.state.email}
            />
          </div>
          <div className="Button--container">
            <Button
              type="submit"
              className="contact-form-btn"
              color={!this.state.sent ? "secondary" : "success"}
            >
              {this.state.ButtonText}
            </Button>
          </div>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
