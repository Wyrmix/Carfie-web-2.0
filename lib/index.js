import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';


import NavBar from '../../components/nav';

AdminLogin.getInitialProps = async function(){
  const res = await fetch('https://www.carfie.com/api/provider/profile'); 
  const data = await res.json(); 

  console.log(`Show data fetched. Cound: ${data.length}`);

  return {
    shows: data
  };
}; 

const MyForm = () => {
  const [formData, setFormData] = useState(null); 
  const [error, setError] = useState(null); 
  const [logIn, setLogIn ] = useState(false); 

  const onSubmit = useCallback(evt => {
    evt.preventDefult();
    setFormData({
      email: evt.target.email.value, 
      password: evt.target.password.value
    });
  }, [setFormData]); 

  useEffect(() => {
    if (formData && !loggedIn){
      
    }
  })

  return (
  <form onSubmit={this.handleSubmit}>
    <label>
      Email address:
      <input type="text" name="email" value={this.state.value} onChange={this.handleChange} /> 
    </label>
    <label>
      Password:
      <input type="text"  name="password" value={this.state.value} onChange={this.handleChange} /> 
    </label>
    <input type="submit" value="Submit" />
  </form>
  ); 
  }

const AdminLogin = () => (
  <Container className="px-0 mx-0 vw-100 mw-100 vh-100 min-vh-100">

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <NavBar />
    <Container className="vh-100 mw-100 mx-0 d-flex justify-content-center align-items-center position-relative" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/img/Yellow-grad.png)' }}>
      <Col>
        <Row className="d-flex justify-content-center align-items-center">
          <MyForm /> 
        </Row>
      </Col>
    </Container>
    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .btn{
      background-color: #2E9599 !important;
      border-color: #2E9599 !important;
    }

     `}
    </style>
  </Container>
)

export default AdminLogin
