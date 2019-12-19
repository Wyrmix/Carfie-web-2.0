import React from 'react';
import Card from 'react-bootstrap/Card';

const myCard = ({ title, subtitle, text }) => (
 <>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text>{text} </Card.Text>
        </Card.Body>
      </Card>
      <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
     h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }

    .card{
      width:15rem;
      height:auto;
      margin: 1rem; 
      background-color: ghostwhite !important; 
      font-family: 'Raleway', sans-serif;
      color: #878787;
    }


    .card-text{
      color: #212529 !important; 
    }

  
     `}
      </style>
    </>
); 

export default myCard;