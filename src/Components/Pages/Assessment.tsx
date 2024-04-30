import React from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import img1 from '../Images/Number1.png';

const DashBoard = ({setCurrentPage}) => {
  const test = ['1', '2'];
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Container>
        <Row>
        <h1 className='text-dark' style={{fontSize: '120px', width: '1200px', paddingRight: '120px', textAlign: 'center'}}>Assessments</h1>
        </Row>
        <Row>
          <Col class="col-md-5 col-md-offset-2">
        <Card border="dark" style={{ width: '30rem' }}> 
        <Card.Img variant="top"  style={{borderBottom: 'gray 1px solid'}} src={img1}/> 
        <Card.Body>
          <Card.Title>Oral Language Assessment</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, </Card.Text>
          <Button variant="success" style={{fontWeight: 'bold'}}  onClick={() => setCurrentPage("OralAssessment")} size='lg'style={{position: "relative", left: "350px", fontWeight: 'bold'}}>START</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col class="col-md-4">
        <Card border="dark" style={{ width: '30rem' }}> 
        <Card.Img variant="top" style={{borderBottom: 'gray 1px solid'}} src={img1}/> 
        <Card.Body>
          <Card.Title> Read and Learn</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, </Card.Text>
          <Button variant="success" onClick={() => setCurrentPage("OralAssessment")} size='lg'style={{position: "relative", left: "350px", fontWeight: 'bold'}}>START</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </ThemeProvider>
  );
};

export default DashBoard;