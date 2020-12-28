import React from 'react';

import SideNav from './sidebar';
import TopNav from './admin-nav'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const AdminLayout = ({children}) => (
  <Container className="px-0 mx-0 vw-100 mw-100 vh-100 min-vh-100">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <TopNav />
    <Container className="mw-100 px-0 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/img/Yellow-grad.png)' }}>
      <Row className="w-100">
        <Col xs lg={2} className="p-0">
          <SideNav />
        </Col>
        <Col xs lg={10} className="d-flex justify-content-center">
         {children}
        </Col>
      </Row>
    </Container>
    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }
     `}
    </style>
  </Container>
)

export default AdminLayout