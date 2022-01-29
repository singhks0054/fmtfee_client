import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import StudentTable from './StudentTable';
import AlertMessage from './AlertMessage';

export default function Feerecord() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);
  const [isdata, setIsdata] = useState(false);
  const sessionRef = useRef(null);
  const courseRef = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`https://fmtfee.herokuapp.com/stdd/${sessionRef.current.value}/${courseRef.current.value}`)
    console.log(data);
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
        <Form.Group as={Col} controlId="form7">
          <Form.Label>Session</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={sessionRef} >
            <option>Choose...</option>
            <option>2018-21</option>
            <option>2019-22</option>
            <option>2020-23</option>
            <option>2021-24</option>
          </Form.Select>
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
          <th>Father Name</th>
          <th>Course</th>
          <th>Session</th>
          <th>Phone No</th>
          <th>Detail</th>
        </tr>
      </thead>
      {data.map((student) => <StudentTable key={student._id} number={i++} id={student._id} regNo={student.regNo} name={student.name} fatherName={student.fatherName} course={student.course} session={student.session} phone={student.phoneNumber} />)}
    </Table>}
  </section>;
}
