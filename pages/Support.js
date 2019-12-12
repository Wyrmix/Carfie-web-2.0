import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Nav = () => (
  <Container>
    <Navbar className="p-0" variant="light">
      <Navbar.Brand href="/">
        <Image
          alt=""
          src="/img/CARFIE_LOGO.png"
          width="50%"
          height="50%"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Navbar>
  </Container>
);

const Support = () => (
  <Container className="mb-5">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <Container>

      <Nav />
      <Col>
        <Row className="d-flex justify-content-center align-items-center">
          <h2 className="text-center">
            We	care	for	your	feedback.
        </h2>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-75" src="/img/iphonecarfie.png" />
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <h4 className="text-center">
            For	any	questions	or support	please contact	Carfie Support	at support@carfie.com
        </h4>
        </Row>
        <Row className="d-flex justify-content-center align-items-center ml-2">
          <h5>
            14681	Midway	Road	#200
        <br />
            Addison,	TX	75001
        <br />
            1-800-311-2794
        <br />
          </h5>
        </Row>
        <Row className="d-flex justify-content-end align-items-center mr-5">
          <h4>
            Thank	you,
        <br />
            Carfie	Team
        </h4>
        </Row>
      </Col>
    </Container>
    <style jsx> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

     `}
    </style>
  </Container>
)

export default Support
