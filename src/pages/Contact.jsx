import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="bg-blue fullHeight m-2 p-2" id="contact">
      <h2>Contact</h2>
      <img
        src="resources/images/fullLogo.jpg"
        alt="Logo"
        className="img-fluid img-thumbnail"
        height="300"
        width="200"
      />
      <div className="p-2" id="formText"></div>
    </div>
  );
};

export default Contact;
