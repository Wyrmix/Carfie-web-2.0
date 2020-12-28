import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const SideNav = () => (
  <>
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
  
     `}
    </style>
  </>
);

export default SideNav; 