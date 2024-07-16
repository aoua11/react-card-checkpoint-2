import React from 'react';
import { Card } from 'react-bootstrap';


export default function Player ({ name, team, nationality, jerseyNumber, age, imageUrl }){

  const cardStyle = {
    width: '10px',
    margin: '10px'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={`${name}'s Image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'messi',
  team: 'mls',
  nationality: 'argentina',
  jerseyNumber: 10,
  age: 38,
  imageUrl: 'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:4x3/messi-1805.jpg'
};


