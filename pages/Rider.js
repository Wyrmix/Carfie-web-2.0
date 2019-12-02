import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Nav = () => (
  <Container>
    <Navbar className="p-0" variant="light">
      <Navbar.Brand href="/">
        <img
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

const Rider = () => (
  <Container className="mb-5">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <Container>

      <Nav />

      <Col className="justify-content-center">
        <h2 className="text-shadow text-center">RIDE WITH CARFIE.</h2>
      </Col>

      <Container className="mw-100 mx-0 h-50 px-0 d-flex justify-content-center">
        <Col sm={12} lg={8}>
        <Image fluid src="/img/Rider_Icon.png" />
        </Col>
      </Container>

      <Row className="justify-content-center align-items-center">
        <Col sm={11} lg={8} xl={6}>
          <Row className="justify-content-center">
            <h4 className="grey">
              Introducing Carfie
            </h4>
          </Row>
          <Row className="text-center">
            <h5 className="info">
              We’re excited to be the official rideshare partner of iHeartRadio JingleBall 2019 Dallas at 7:30PM on Dec 3.
              Sign up now, for 10% discount towards your first ride.
            </h5>
            <h5 className="info">
              To celebrate, we’re rewarding our users with <strong>$1000</strong> cash prize!
              </h5>
            <h5 className="info">
              Once your account is all setup,
              Add $25 to your wallet
              Request a ride to and from JingleBall, win <strong>$1000</strong>.
              </h5>
            <h5 className="info">
              Signup below with your email to enter.
              </h5>
            <h5 className="info">
              Take a selfie in your Carfie ride, post to social media and tag Carfie to win <strong>$1000</strong>.
              App Available for download Nov 15 or later.
            </h5>
          </Row>
          <Row className="justify-content-center">
            <Link href="/Terms"><h6 className="link">Terms Apply</h6></Link>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href=""><Image fluid src="/img/Apple.png" /></a>
            </Col>
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href=""><Image fluid src="/img/Google.png" /></a>
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

    .btn-primary{
      background-color: #f56c40 !important;
      border-color : #f56c40 !important;
    }

    .form{
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .info{
      padding-top: .3rem;
      padding-bottom: .3rem;
    }
    .text-shadow{
      text-shadow: 0px 2px 2px rgba(135, 135, 135, 0.16);
    }
    
    .icon{
      width: 11rem;
      position: absolute;
      top: 5rem;
      left: 3rem;
      z-index: 10;
    }

    .link{
      color: #2E9599;
    }

    .red-carfie{
      width: 30rem;
    }
     `}
    </style>
  </Container>
)

export default Rider
