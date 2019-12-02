import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Image
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

const Rider = () => (
  <Container fluid className="mb-5">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <Container>

      <NavBar />

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
          <Row className="justify-content-center">
            <h5 className="info text-center">
              We’re excited to be the official rideshare partner of iHeartRadio JingleBall 2019 Dallas at 7:30PM on Dec 3.
              Sign up now, for 10% discount towards your first ride.
            </h5>
            <h5 className="info text-center">
              To celebrate, we’re rewarding our users with <strong>$1000</strong> cash prize!
              </h5>
            <h5 className="info text-center">
              Once your account is all setup,
              Add $25 to your wallet
              Request a ride to and from JingleBall, win <strong>$1000</strong>.
              </h5>
            <h5 className="info text-center">
              Signup below with your email to enter.
              </h5>
            <h5 className="info text-center">
              Take a selfie in your Carfie ride, post to social media and tag Carfie to win <strong>$1000</strong>.
              App Available for download Nov 15 or later.
            </h5>
          </Row>
          <Row className="justify-content-center">
            <a href="https://gallery.mailchimp.com/c9b7a263330dc319587a3f287/files/037180f9-f522-469d-b9d7-ff8af552e19d/Carfie_Terms.pdf"><h6 className="link">Terms Apply</h6></a>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href="https://apps.apple.com/us/app/carfie/id1487999405"><Image fluid src="/img/Apple.png" /></a>
            </Col>
            <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center w-50">
              <a href="https://play.google.com/store/apps/details?id=com.carfie.rider"><Image fluid src="/img/Google.png" /></a>
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

    .info{
      padding-top: .3rem;
      padding-bottom: .3rem;
    }

    .text-shadow{
      text-shadow: 0px 2px 2px rgba(135, 135, 135, 0.16);
    }
    
    .link{
      color: #2E9599;
    }

     `}
    </style>
  </Container>
)

export default Rider
