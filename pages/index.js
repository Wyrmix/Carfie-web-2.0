import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

const Home = () => (
  <Container className="px-0 mx-0 vw-100 mw-100 vh-100 min-vh-100">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <NavBar />

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/splash.png)' }}>
      <Row className="justify-content-center mr-0">
        <Col xs={12} md={12} className="d-flex flex-column align-items-center my-5">
          <h3 className="text-white text-shadow">sign up</h3>
        </Col>
        <Col xs={6} md={6} className="d-flex flex-column align-items-center">
          <Link href="/Rider"><img className="icon img-fluid h-50" src="/img/Rider_icon.png" /></Link>
          <h3 className="text-white text-shadow">ride</h3>
        </Col>
        <Col xs={6} md={6} className="d-flex flex-column align-items-center">
          <Link href="/Driver"><img className="icon img-fluid h-50" src="/img/Driver_icon.png" /></Link>
          <h3 className="text-white text-shadow">drive</h3>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col lg={6, { order: 1 }} md={12, { order: 1 }} className="justify-content-center align-items-center">
          <img className="img-fluid mh-50 mw-50" src="/img/iphonecarfie.png" />
        </Col>
        <Col lg={6, { order: 2 }} md={12, { order: 2 }} className="text-center justify-content-center align-items-center">
          <h2 className="grey">
            <strong>
              Tap the app, get a ride
          </strong>
          </h2>
          <h4 className="grey">
            Carfie is the smartest way to get around. One tap and a car comes directly to you. Your driver knows exactly where to go. And you can pay with either cash or card.
        </h4>
        </Col>
      </Row>
    </Container>

    <div className=" grey-gradient h-75 mw-100 mx-0 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col lg={6} sm={12} className="text-center justify-content-center align-items-center">
          <h2>
            <strong>
              Ready anywhere, anytime
          </strong>
          </h2>
          <h4>
            Daily commute. Errand across town. Early morning flight. Late night drinks. Wherever you’re headed, count on Carfie for a ride—no reservations needed.
        </h4>
        </Col>
        <Col lg={6} sm={12} className="justify-content-center align-items-center">
        </Col>
      </Row>
    </div>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col lg={6, { order: 1 }} md={12, { order: 2 }} className="justify-content-center align-items-center">
          <img className="img-fluid mh-50 mw-50" src="/img/iphonecarfie.png" />
        </Col>
        <Col lg={6, { order: 2 }} md={12, { order: 1 }} className="text-center justify-content-center align-items-center">
          <h4 className="grey">
            You can always request everyday cars at everyday prices. But sometimes you need a bit more space. Or you want to go big on style. With Carfie, the choice is yours.
        </h4>
        </Col>
      </Row>
    </Container>

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

     `}
    </style>
  </Container>
)

export default Home
