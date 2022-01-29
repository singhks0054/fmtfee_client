import React, { useRef, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import AlertMessage from './AlertMessage';

export default function Fee() {

  const [message, setMessage] = useState('Fill the Form !');
  const [variant, setvariant] = useState(null);

  const regNoRef = useRef('');
  const nameRef = useRef('');
  const sessionRef = useRef('');
  const booknoRef = useRef('');
  const serialnoRef = useRef('');
  const amountRef = useRef('');
  const dateRef = useRef('');
  const courseRef = useRef('');
  const semesterRef = useRef('');
  const methodRef = useRef('');
  const submittedtoRef = useRef('');


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('https://fmtfee.herokuapp.com/fee', {
        regNo: parseInt(regNoRef.current.value),
        name: nameRef.current.value,
        session: sessionRef.current.value,
        bookNo: parseInt(booknoRef.current.value),
        sNo: parseInt(serialnoRef.current.value),
        amount: parseInt(amountRef.current.value),
        submitDate: dateRef.current.value,
        course: courseRef.current.value,
        semester: parseInt(semesterRef.current.value),
        mop: methodRef.current.value,
        submittedTo: submittedtoRef.current.value,
      })
      setMessage(data.message)
      setvariant('success')

      data.error && setvariant('danger')
      regNoRef.current.value = ''
      nameRef.current.value = ''
      sessionRef.current.value = 'Choose...'
      booknoRef.current.value = ''
      serialnoRef.current.value = ''
      amountRef.current.value = ''
      dateRef.current.value = ''
      courseRef.current.value = 'Choose...'
      semesterRef.current.value = 'Choose...'
      methodRef.current.value = 'Choose...'
      submittedtoRef.current.value = ''
    } catch (error) {
      setvariant('danger')
    }
  }

  return <section className='container mt-3' ><AlertMessage message={message} variant={variant} /><Form className='mt-3' onSubmit={submitHandler}>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="form1">
        <Form.Label>Book No.</Form.Label>
        <Form.Control type="text" required placeholder="Book No." ref={booknoRef} />
      </Form.Group>
      <Form.Group as={Col} controlId="form2">
        <Form.Label>Serial No.</Form.Label>
        <Form.Control type="text" required placeholder="Serial No." ref={serialnoRef} />
      </Form.Group>
      <Form.Group as={Col} controlId="form3">
        <Form.Label>Registration No.</Form.Label>
        <Form.Control type="text" required placeholder="Amount" ref={regNoRef} />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="form4">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter Name" ref={nameRef} />
      </Form.Group>
      <Form.Group as={Col} controlId="form5">
        <Form.Label>Session</Form.Label>
        <Form.Select defaultValue="Choose..." required ref={sessionRef} >
          <option>Choose...</option>
          <option>2018-21</option>
          <option>2019-22</option>
          <option>2020-23</option>
          <option>2021-24</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="form6">
        <Form.Label>Submit Date</Form.Label>
        <Form.Control type="Date" required placeholder="Date" ref={dateRef} />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="form7">
        <Form.Label>Course</Form.Label>
        <Form.Select defaultValue="Choose..." required ref={courseRef}>
          <option>Choose...</option>
          <option>BBA</option>
          <option>BCA</option>
          <option>MBA</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="form8">
        <Form.Label>Semester</Form.Label>
        <Form.Select defaultValue="Choose..." required ref={semesterRef}>
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="form9">
        <Form.Label>Method</Form.Label>
        <Form.Select defaultValue="Choose..." required ref={methodRef}>
          <option>Choose...</option>
          <option>Cash</option>
          <option>Bank</option>
          <option>Online</option>
        </Form.Select>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="form10">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" required placeholder="Enter Amount" ref={amountRef} />
      </Form.Group>
      <Form.Group as={Col} controlId="form10">
        <Form.Label>Submitted To</Form.Label>
        <Form.Control type="text" required placeholder="Enter Name" ref={submittedtoRef} />
      </Form.Group>
    </Row>
    <Button variant="primary" type='submit'>
      Submit
    </Button>
  </Form></section>;
}
