import React from 'react';
// import ReactDOM from 'react-dom';
// import fetch from 'isomorphic-unfetch';

// import { useForm, useField, splitFormProps } from 'react-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NavBar from '../../components/nav';

/*
async function sendToServer(val) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return val;
}

function validateUserName(val) {
  if (!val) {
    return "Plese enter username";
  }
  return false;
}

async function validatePassword(val) {
  if (!val) {
    return "Please enter password";
  }
  return instance.debounce(async () => {
    console.log("checking password");
    await new Promise(resolve => setTimeout(resolve, 1000));
    return false;
  }, 500);
}

const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField(field, fieldOptions);

  return (
    <>
      <input {...getInputProps({ ref, ...rest })} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
});
*/

const MyForm = () => (
  /*
  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    onSubmit: async (val, instance) => {
      await sendToServer(val);
      console.log('Sent to server');
    },
    debugForm: true
  });
  */
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" validate />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
)

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
