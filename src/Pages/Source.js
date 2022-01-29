import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Source() {
  return <Row className='container pt-5 mt-5'>
    <Card as={Col} style={{ width: '18rem' }} className='mx-5'>
      <Card.Img variant="top" src="./fee.jpg" />
      <Card.Body>
        <Link variant="primary" className='btn btn-primary' to={'/fee'}>Submit Fee</Link>
      </Card.Body>
    </Card>
    <Card as={Col} style={{ width: '14rem', }} className='mx-5'>
      <Card.Img variant="top" src="./stu.jpg" height={'220px'} />
      <Card.Body>
        <Link variant="primary" className='btn btn-primary' to={'/student'}>Add Student</Link>
      </Card.Body>
    </Card>
    <Card as={Col} style={{ width: '18rem' }} className='mx-5'>
      <Card.Img variant="top" src="./record.jpg" />
      <Card.Body>
        <Link variant="primary" className='btn btn-primary' to={'/record'}>Record</Link>
      </Card.Body>
    </Card>
  </Row>;
}
