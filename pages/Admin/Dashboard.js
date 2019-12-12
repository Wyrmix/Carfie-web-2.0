import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

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
  </Container >
);

const SideNav = () => (
  <Navbar className="px-0 pt-3 sidebar" bg="dark" variant="dark" expand="lg">
    <Navbar.Toggle aria-controls="side-bar" />
    <Navbar.Collapse id="side-bar" className="flex-column">
      <Nav bg="dark" variant="pills" defaultActiveKey="/admin/dashboard" className="flex-column w-100">
        <Navbar.Brand>ADMIN DASHBOARD</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/heatmap">Heat Map</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Map">Map</Nav.Link>
        </Nav.Item>
        <br />
        <Navbar.Brand>MEMBERS</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/Users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Providers">Providers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/AccountMangager">Account Manager</Nav.Link>
        </Nav.Item>
        <br />
        <Navbar.Brand>ACCOUNT</Navbar.Brand>
        <Nav.Item>
          <NavDropdown title="Statements" id="nav-dropdown">
            <NavDropdown.Item href="4.1">Ride Statements</NavDropdown.Item>
            <NavDropdown.Item href="4.2">Provider Statements</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Settlements" id="nav-dropdown">
            <NavDropdown.Item href="4.1">Provider Settlements</NavDropdown.Item>
            <NavDropdown.Item href="4.2">All Transactions</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <br />
        <Navbar.Brand>REQUEST</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/Request/History">Request History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Request/Rides">Sceduled Rides</Nav.Link>
        </Nav.Item>
        <br />
        <Navbar.Brand>PAYMENT DETAILS</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/Payment/History">Payment History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Payment/Settings">Payment Settings</Nav.Link>
        </Nav.Item>
        <br />
        <Navbar.Brand>BACKGROUND CHECK</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/BackgroundCheck/History">History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/BackgroundCheck/Initate">Initate</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/BackgroundCheck/Results">Results</Nav.Link>
        </Nav.Item>
        <br />
        <Navbar.Brand>OTHERS</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/admin/SiteSettings">Site Settings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/ServiceTypes">Service Type</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Documents">Documents</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Promocodes">Promocodes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/CmsPages">Cms Pages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/CustomPush">Custom Push</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/Translations">Translations</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const Dashboard = () => (
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
          <Container>
            <Row className="flex-row flex-wrap w-100 justify-content-between">
              {/* this is where I would like to add a loop */}
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="w-100 h-50">
              <Col sm={12} lg={5}>
              <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm={12} lg={7}>
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .sidebar{
      min-width: 171px;
      max-width: 240px;
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

    .navbar-expand-lg .navbar-nav .dropdown-menu{
      position: inherit !important;
    }


    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
      background-color: #A7236F !important;
    }


  .dropdown-menu{
    margin-top: 0 !important;
    background-color: #57616b !important;
    color: rgba(255,255,255,.5) !important; 
  }

  .dropdown-item{
    color: rgba(255,255,255,.5) !important; 
  }

  a.dropdown-item:hover{
    background-color: #57616b !important;
    color: rgba(255,255,255,.75) !important; 
  }


  a.dropdown-item:active{
    background-color: #d12c8b !important;
    color: rgba(255,255,255,.75) !important; 
  }

  .card{
    width:15rem;
    height:auto;
    margin: 1rem; 
    background-color: ghostwhite !important; 
    font-family: 'Raleway', sans-serif;
    color: #878787;
  }

  .table{
    background-color: ghostwhite !important; 
    font-family: 'Raleway', sans-serif;
    color: #878787;
  }

  
     `}
    </style>
  </Container>
)

export default Dashboard