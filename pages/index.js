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

const Footer = () => (
  <Navbar sticky="bottom" bg="dark" variant="dark" className="d-flex justify-content-center align-items-center w-100">
    <Nav className="d-flex justify-content-between align-items-center w-75">
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

    <Container className="h-50 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundImage: 'url(/img/splash.png)' }}>
      <h3 className="text-white text-shadow">The only ride sharing app that rewards you for events and conventions.</h3>
      <h5 className="text-white sponsor-text">Proud to be the official ride share partner of</h5>
      <img className="sponsor-logo img-fluid d-block" src="/img/Sponsor_logo.png" />
    </Container>
    <Container className="mh-50 my-3 mw-100 mx-0 d-flex justify-content-center align-items-center">
      <Row>
        <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={12} md={4} sm={6} className="w-100 d-flex justify-content-center align-items-center">
              <h2 className="grey">
                drive for us
            </h2>
            </Col>
            <Col lg={12} md={6} sm={6} className="d-flex justify-content-center align-items-center">
              <Row>
                <Col lg={5} xs={5} className="w-50 d-flex justify-content-center align-items-center">
                  <Link href="/Driver"><Image fluid className="w-50" src="/img/Driver-Button.png" /></Link>
                </Col>
                <Col lg={5} xs={6} className="w-50">
                  <Row>
                    <a href="https://apps.apple.com/us/app/carfie-driver/id1488008094"><Image fluid src="/img/Apple.png" /></a>
                  </Row>
                  <Row>
                    <a href="https://play.google.com/store/apps/details?id=com.carfie.driver"><Image fluid src="/img/Google.png" /></a>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={12} md={4} sm={6} className="w-100 d-flex justify-content-center align-items-center">
              <h2 className="grey">
                ride with us
            </h2>
            </Col>
            <Col lg={12} md={6} sm={6} className="d-flex justify-content-center align-items-center">
              <Row>
                <Col lg={5} xs={5} className="w-50 d-flex justify-content-center align-items-center">
                  <Link href="/Rider"><Image fluid className="w-50" src="/img/Rider-Button.png" /></Link>
                </Col>
                <Col lg={5} xs={6} className="w-50">
                  <Row>
                    <a href="https://apps.apple.com/us/app/carfie/id1487999405"><Image fluid src="/img/Apple.png" /></a>
                  </Row>
                  <Row>
                    <a href="https://play.google.com/store/apps/details?id=com.carfie.rider"><Image fluid src="/img/Google.png" /></a>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Green-grad.png)' }}>
      <Row className="d-flex p-3 justify-content-center align-items-center">
        <Col md={6} sm={12} className="d-flex justify-content-center align-items-center">
          <Image fluid className="mh-50 mw-50" src="/img/iphonecarfie.png" />
        </Col>
        <Col md={6} sm={12} className="text-center justify-content-center align-items-center">
          <h3>
            <strong>
              Tap the app, get a ride
          </strong>
          </h3>
          <h5>
          With Carfie you can get around the town. With few taps and a car comes to pick you up. Your driver knows exactly where to go and you can pay with credit card.
        </h5>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: 'url(/img/Yellow-grad.png)' }}>
      <Row className="d-flex px-3 justify-content-center align-items-center">
        <Col md={{span: 6, order: 1 }} sm={{span: 12, order: 2 }} xs={{span: 12, order: 2 }}  className="text-center justify-content-center align-items-center">
          <h3>
            <strong>
              Ready anywhere, anytime
          </strong>
          </h3>
          <h5>
          Daily commute. Errand across town. Early morning flight. Late night drinks. Wherever you're headed, count on Carfie for a ride with real-time request — no reservations needed.
        </h5>
        </Col>
        <Col md={{span: 6, order: 2 }} sm={{span: 12, order: 1 }} xs={{span: 12, order: 1 }}  className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50 h-50" src="/img/carfie-anywhere-green.png" />
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/img/Red-grad.png)' }}>
      <Row className="d-flex px-3 justify-content-center align-items-center">
        <Col md={6} sm={12} className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50 h-50" src="/img/rewards.png" />
        </Col>
        <Col md={6} sm={12} className="text-center justify-content-center align-items-center">
          <h3>
            <strong>
            Earn rewards
          </strong>
          </h3>
          <h5>
          Whether you drive with Carfie or request a ride with us, the more you share your rides as a driver or try us out as a rider, you will earn rewards towards more earnings and savings.
        </h5>
        </Col>
      </Row>
    </Container>

    <Container className="h-75 mw-100 mx-0 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/img/Green-Red-grad.png)' }}>
      <Row className="d-flex w-100 px-3 justify-content-center align-items-center">
        <Col md={{span: 6, order: 1 }} sm={{span: 12, order: 2 }} xs={{span: 12, order: 2 }} className="text-center justify-content-center align-items-center">
          <h3>
            <strong>
              Low-cost luxury
          </strong>
          </h3>
          <h5>
          You can always request everyday cars at everyday prices or something with a bit more space. With five different types to meet your needs, the choice is yours with Carfie.
        </h5>
        </Col>
        <Col md={{span:6, order: 2 }} sm={{span:12, order: 1 }} xs={{span: 12, order: 1 }} className="d-flex justify-content-center align-items-center">
          <Image fluid className="w-50 h-50" src="/img/untitled.png" />
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
      right: 7em;
      margin-left: 1rem;
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.16);
    }

     `}

    </style>
  </Container>
)

export default Home
