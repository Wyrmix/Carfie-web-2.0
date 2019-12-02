import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const NavBar = () => (
  <Container>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <Navbar className="p-0 justify-content-between" variant="light">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/img/CARFIE_LOGO.png"
          width="50%"
          height="50%"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/Driver">Drive</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Rider">Ride</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </Container>
);

const Driver = () => (
  <Container fluid className="mb-sm-5">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <NavBar />

    <Container fluid className="mb-3">
      <Row className="d-flex justify-content-center">
        <h2 className="text-shadow text-center ml-5">BECOME A DRIVER WITH CARFIE.</h2>
      </Row>

      <Row className="justify-content-center align-items-center my-3">
        <Col lg={8}>
          <Row className="align-items-center justify-content-center">
            <Image fluid src="/img/Jingle-Ball-Driver.png" />
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm={11} lg={8} xl={6}>
          <Row className="justify-content-center">
            <h5 className="info text-center">Sign up to drive with Carfie. The official rideshare partner of iHeartRadio JingleBall 2019, 7:30PM at Dickies Arena, Fort Worth TX. </h5>

            <h5 className="info text-center">Complete 150 rides within 90 days for a <strong>$500</strong> bonus.</h5>

            <h5 className="info text-center">Complete 2 rides to and from Jingle ball for a <strong>$1000</strong> sign up bonus.</h5>

            <h5 className="info text-center">App Available for download Nov 15 or later.</h5>
          </Row>

          <Row className="justify-content-center">
            <a href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/037180f9-f522-469d-b9d7-ff8af552e19d/Carfie_Terms.pdf"><h6 className="link">Terms Apply</h6></a>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href="https://apps.apple.com/us/app/carfie-driver/id1488008094"><Image fluid src="/img/Apple.png" /></a>
            </Col>
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href="https://play.google.com/store/apps/details?id=com.carfie.driver"><Image fluid src="/img/Google.png" /></a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>


    <style jsx> {`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .text-shadow{
      text-shadow: 0px 2px 2px rgba(135, 135, 135, 0.16);
    }
    

    .link{
      color: #2E9599;
    }

    .info{
      padding-top: .3rem;
      padding-bottom: .3rem;
    }

     `}
    </style>
  </Container>

)

export default Driver
