import React, { useState, useEffect, useCallback } from 'react';
import fetch from 'isomorphic-unfetch';


import NavBar from '../components/nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const MyForm = () => {
  const [formData, setFormData] = useState(null); 
  const [error, setError] = useState(null);

  const onSubmit = useCallback(evt => {
    evt.preventDefault();

    console.log(evt.target.type.value);

    setFormData({
      email: evt.target.email.value,
      type: evt.target.type.value,
    });
  }, [setFormData]); 

  useEffect(() => {
    if(formData){
      fetch(`https://stage.carfie.com/api/${formData.type}/forgot/password`, {
        method: 'post', 
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        redirect: 'follow', 
        body: JSON.stringify({ email: formData.email })
      }).then(async (res) => {
        const resData = await res.json();
        if (!res.ok) {
          setError(resData);
        }

        else {
          console.dir(resData);
        }
      }).catch(e => {
        setError(e);
      });
    }
  }, [formData])

  if (error) {
    return (
      <pre><code>{JSON.stringify(error, null, 2)}</code></pre>
    )
  }

  return (
  <form onSubmit={onSubmit}>
    <label>
      Email address:
      <input type="text" name="email" placeholder="Enter email"/> 
    </label>
    <select name="type">
      <option value="provider">Driver</option>
      <option value="user">Rider</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
  ); 
  };

const ForgotPassword = () => (
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

export default ForgotPassword
