import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { FeeTable } from './StudentTable';
import AlertMessage from './AlertMessage';

export default function Feerecord() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);
  const [isdata, setIsdata] = useState(false);
  const regNoRef = useRef(null);
  const semesterRef = useRef(null);
  const courseRef = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`https://fmtfee.herokuapp.com/feesearch/${courseRef.current.value}/${regNoRef.current.value}/${semesterRef.current.value}`)
    console.log(data);
    console.log(data.submitDate);
    setData(data)

    if (data.length === 0) {
      setIsdata(false)
      setMessage('There is No Student. Select the right option !')
      setVariant('danger')
    } else {
      setMessage(`${data.length} Students Found !`)
      setVariant('success')
      setIsdata(true)
    }
    console.log(data);
  }

  let i = 1;

  return <section className='container mt-5'>
    {message && <AlertMessage variant={variant} message={message} />}
    <Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Registration No.</Form.Label>
          <Form.Control type="text" ref={regNoRef} placeholder="Enter Registration No." />
        </Form.Group>
        <Form.Group as={Col} controlId="form7">
          <Form.Label>Course</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={courseRef} >
            <option>Choose...</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>MBA</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="form7">
          <Form.Label>Semester</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={semesterRef} >
            <option>Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
    {isdata && <Table striped bordered hover className={'mt-5'}>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Reg. No</th>
          <th>Name</th>
          <th>Course</th>
          <th>Submit Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      {data.map((student) => <FeeTable key={student._id} number={i++} regNo={student.regNo} name={student.name} course={student.course} submit={student.submitDate} course={student.course} amount={student.amount} />)}
    </Table>}
  </section>;
}
