import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const Footer = () => (
  <Navbar sticky="bottom" bg="dark" variant="dark" className="d-flex justify-content-center align-items-center w-100">
    <Nav className="d-flex justify-content-between align-items-center w-50">
      <Nav.Link href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/037180f9-f522-469d-b9d7-ff8af552e19d/Carfie_Terms.pdf">Terms</Nav.Link>
      <Nav.Link href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/a5a2c9f7-e723-4887-9005-e5d4f34e44fa/Carfie_Privacy.pdf">Privacy</Nav.Link>
      <Nav.Link href="/Support">Support</Nav.Link>
    </Nav>
  </Navbar>
);

const Home = () => (
  <Container className="px-0 mx-0 vw-100 mw-100 vh-100 min-vh-100">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <NavBar />

    <Container className="h-50 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/splash.png)' }}>
      <h3 className="text-white text-shadow">The only ride sharing app that rewards you for events and conventions.</h3>
      <h4 className="text-white sponsor-text">Proud to be the official ride share partner of</h4>
      <img className="sponsor-logo img-fluid d-block" src="/img/Sponsor_logo.png" />
    </Container>
    <Container className="h-50 mw-100 mx-0 d-flex justify-content-center align-items-center">
      <Row className="d-flex justify-content-center align-items-center w-100 pr-lg-5">
        <Col lg={6} className="d-flex justify-content-center align-item-center">
          <Row>
            <Col lg={12} className="w-100 d-flex justify-content-center align-items-center">
              <h2 className="grey">
                drive for us
            </h2>
            </Col>
            <Col lg={12} className="w-100">
              <Row>
                <Col lg={6} className="d-flex justify-content-end align-items-center mw-50">
                  <Link href="/Driver"><Image fluid className="w-50" src="/img/Driver-Button.png" /></Link>
                </Col>
                <Col lg={6} className="mw-50">
                    <a href="https://apps.apple.com/us/app/carfie-driver/id1488008094"><Image fluid src="/img/Apple.png" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.carfie.driver"><Image fluid src="/img/Google.png" /></a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="d-flex justify-content-center align-item-center">
          <Row>
            <Col lg={12} className="d-flex justify-content-center align-items-center">
              <h2 className="grey">
                ride with us
              </h2>
            </Col>
            <Col lg={12} className="d-flex justify-content-end align-items-center">
              <Row>
                <Col lg={6} className="d-flex justify-content-end align-items-center">
                  <Link href="/Rider"><Image fluid className="w-50" src="/img/Rider-Button.png" /></Link>
                </Col>
                <Col lg={6}>
                    <a href="https://apps.apple.com/us/app/carfie-driver/id1488008094"><Image fluid src="/img/Apple.png" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.carfie.driver"><Image fluid src="/img/Google.png" /></a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Green-grad.png)' }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={6, { order: 1 }} md={12, { order: 1 }} className="justify-content-center align-items-center">
          <Image fluid className="mh-50 mw-50" src="/img/iphonecarfie.png" />
        </Col>
        <Col lg={6, { order: 2 }} md={12, { order: 2 }} className="text-center justify-content-center align-items-center">
          <h2>
            <strong>
              Tap the app, get a ride
          </strong>
          </h2>
          <h4>
            Carfie is the smartest way to get around. One tap and a car comes directly to you. Your driver knows exactly where to go. And you can pay with either cash or card.
        </h4>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Yellow-grad.png)' }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={6, { order: 1 }} md={12, { order: 2 }} className="text-center justify-content-center align-items-center">
          <h2>
            <strong>
              Ready anywhere, anytime
          </strong>
          </h2>
          <h4>
            Daily commute. Errand across town. Early morning flight. Late night drinks. Wherever you’re headed, count on Carfie for a ride—no reservations needed.
        </h4>
        </Col>
        <Col lg={6, { order: 2 }} md={12, { order: 1 }} className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50" src="/img/carfie-anywhere-green.png" />
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Red-grad.png)' }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={6} md={12} className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50" src="/img/rewards.png" />
        </Col>
        <Col lg={6} md={12} className="text-center justify-content-center align-items-center">
          <h2>
            <strong>
              Earn rewards
          </strong>
          </h2>
          <h4>
            Both our drivers and rides can earn points whenever they ride or drive. So buckle up and start earning rewards with Carfie today.
        </h4>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Green-Red-grad.png)' }}>
      <Row className="d-flex w-100 justify-content-center align-items-center">
        <Col lg={6, { order: 1 }} md={12, { order: 2 }} className="text-center justify-content-center align-items-center">
          <h2>
            <strong>
              Low-cost luxury
          </strong>
          </h2>
          <h4>
            You can always request everyday cars at everyday prices. But sometimes you need a bit more space. Or you want to go big on style. With Carfie, the choice is yours.
        </h4>
        </Col>
        <Col lg={6, { order: 2 }} md={12, { order: 1 }} className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50" src="/img/untitled.png" />
        </Col>
      </Row>
    </Container>

    <Footer />

    <style jsx> {`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
    }

    .background-image{
      background-size: auto;
    }

    .grey{
      color: #878787 !important;
    }

    .grey-gradient{
      background: linear-gradient(to right, white, #878787);
    }

    .text-shadow{
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.16);
    }

    .icon{
      cursor: pointer;
    }

    .icon-row{
      position: absolute;
    }

    .sponsor-logo {
      position: absolute;
      bottom: 1em;
      right: 1em;
      max-height: 20%;
    }

    .sponsor-text{
      position: absolute;
      bottom: 1em;
      right: 5em;
      margin-left: 1rem;
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.16);
    }

     `}

    </style>
  </Container>
)

export default Home
