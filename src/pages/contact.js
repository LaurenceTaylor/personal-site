import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

export default () => (
  <div className="main">
    <Header headerText="contact" headerId="contact" />
    <Container>
      <center>
        <form
          method="post"
          action="https://formspree.io/contact@laurencetaylor.co.uk"
        >
          Email
          <br />
          <input type="email" name="_replyto" id="email-box" />
          <br />
          <br />
          Message
          <br />
          <textarea name="body" id="body-box" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </center>
    </Container>
    <Footer />
  </div>
)
