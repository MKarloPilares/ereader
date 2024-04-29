import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import img1 from '../Images/Number1.png';

const DashBoard = ({setCurrentPage}) => {
  const test = ['1', '2'];
  return (
    <Container fluid>
    <div style={{position: 'fixed', left: '500px', bottom: '1px'}}>
        <h1 className='text-dark' style={{fontSize: '120px', width: '1200px', paddingRight: '120px'}}>E-Readers for Early Readers</h1>
        <Row>
          <Col class="col-md-5 col-md-offset-2">
        <Card border="success" style={{ width: '30rem' }}> 
        <Card.Img variant="top" src={img1}/> 
        <Card.Body>
          <Card.Title> Read and Learn</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, </Card.Text>
          <Button variant="success" onClick={() => setCurrentPage("Assessment")} size='lg'style={{position: "relative", left: "350px"}}>START</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col class="col-md-4">
        <Card border="success" style={{ width: '30rem' }}> 
        <Card.Img variant="top" src={img1}/> 
        <Card.Body>
          <Card.Title> Read and Learn</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, </Card.Text>
          <Button variant="success" onClick={() => setCurrentPage("Assessment")} size='lg'style={{position: "relative", left: "350px"}}>START</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </div>
    </Container>
  );
};

export default DashBoard;
