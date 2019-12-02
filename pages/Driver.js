import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

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

const Driver = () => (
  <Container className="mb-sm-5">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <Nav />

    <Container>
      <Col className="justify-content-center">
        <h2 className="text-shadow text-center">BECOME A DRIVER WITH CARFIE.</h2>
      </Col>
      <Row className="justify-content-center align-items-center my-3">
        <Col lg={8}>
          <Row className="align-items-center justify-content-center">
            <img className="icon" src="/img/Driver_icon.png" />
            <img className="green-carfie" src="/img/greencarfie.png" />
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm={11} lg={6}>
          <Row className="text-center">
            <h5>Sign up to drive with Carfie. The official rideshare partner of
                iHeartRadio JingleBall 2019, 7:30PM at Dickies Arena, Fort Worth TX.
                Complete 150 rides within 90 days for a <strong>$500</strong> bonus.
                Complete 2 rides to and from Jingle ball for a <strong>$1000</strong> sign up bonus.
                App Available for download Nov 15 or later.
          </h5>
          </Row>
          <Row className="justify-content-center">
            <Link href="/Terms"><h6 className="link">Terms Apply</h6></Link>
          </Row>
          <Row className="my-3 align-items-top">
            <Col sm={12} lg={3}>
              <h2 className="text-center">sign up</h2>
            </Col>
            <Col sm={12} lg={9}>
              <Form>
                <div className="form">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control required type="email" placeholder="youremail@mail.com" />
                  </Form.Group>
                  <fieldset>
                    <Form.Group>
                      <Form.Label>How did you hear about us?</Form.Label>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Online (Facebook/Instagram/etc)"
                          id="online"
                        />
                        <Form.Check
                          type="radio"
                          label="Offline (Flyers)"
                          id="offline"
                        />
                        <Form.Check
                          type="radio"
                          label="Other (Word of mouth)"
                          id="other"
                        />
                        <Form.Check
                          type="radio"
                          label="iHeartRadio"
                          id="iHeartRadio"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </div>
                <Button className="btn" variant="primary" type="submit">
                  Sign up to Drive
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <h6>*Required field. Your privacy is protected.</h6>
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
      background-color: #2e9599 !important;
      border-color: #2e9599 !important;
    }

    .form{
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .text-shadow{
      text-shadow: 0px 2px 2px rgba(135, 135, 135, 0.16);
    }
    
    .icon{
      width: 215px;
      height: 215px;
      position: absolute;
      top: 15%;
      left: 15%;
    }

    .link{
      color: #2E9599;
    }

    .green-carfie{
      width: 50%;
      height: 50%;
      margin-left: 10rem;
    }

    @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      .icon{
        width: 110px;
        height: 110px;
        position: absolute;
        top: 17%;
        left: -12%;
      }
      .green-carfie{
        width: 100%;
        height: 100%;
        margin-left: 7rem;
      }
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px)  { 
      /* For ipads: */
      .icon{
        width: 40%;
        height: 40%;
        position: absolute;
        top: 17%;
        left: -23%;
      }

      .green-carfie{
        width: 100%;
        height: 100%;
        margin-left: 7rem;
      }
    }

     `}
    </style>
  </Container>
)

export default Driver
