import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer = () => (
  <Navbar sticky="bottom" bg="dark" variant="dark" className="d-flex justify-content-center align-items-center w-100">
    <Nav className="d-flex justify-content-between align-items-center w-75">
      <Nav.Link href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/037180f9-f522-469d-b9d7-ff8af552e19d/Carfie_Terms.pdf">Terms</Nav.Link>
      <Nav.Link href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/a5a2c9f7-e723-4887-9005-e5d4f34e44fa/Carfie_Privacy.pdf">Privacy</Nav.Link>
      <Nav.Link href="http://support.carfie.com">Support</Nav.Link>
    </Nav>
  </Navbar>
);

export default Footer; 