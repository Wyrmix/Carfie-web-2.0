import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'; 


const TopNav = () => (
  <Container>
    <Navbar className="p-0" variant="light" expand="lg">
      <Navbar.Brand href="/">
        <Image
          alt=""
          src="/img/CARFIE_LOGO.png"
          width="50%"
          height="50%"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/admin/Profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/admin/Settings">Account Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/admin/Change Password">Change Password</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/admin/Help">Help</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/admin/Logout">Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .navbar{
      font-family: 'Raleway', sans-serif;
    }

    .navbar-brand{
      font-size: .75rem !important;
      padding-left: 1rem; 
    }

    .nav-link{
      padding-left: 1.3rem !important;
    }
  
     `}
    </style>
  </Container >
);

export default TopNav; 