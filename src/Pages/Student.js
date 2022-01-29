import React, { useState, useRef } from 'react';
import axios from 'axios'
import { Form, Row, Col, Button } from 'react-bootstrap';
import AlertMessage from './AlertMessage';

export default function Student() {

  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);

  const nameRef = useRef('');
  const fatherRef = useRef('');
  const motherRef = useRef('');
  const addressRef = useRef('');
  const emailRef = useRef('');
  const regNoRef = useRef('');
  const sessionRef = useRef('');
  const adharRef = useRef('');
  const panRef = useRef('');
  const phoneRef = useRef('');
  const dobRef = useRef('');
  const courseRef = useRef('');
  const categoryRef = useRef('');
  const genderRef = useRef('');

  const submitHandler = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('https://fmtfee.herokuapp.com/student', {
      name: nameRef.current.value,
      fatherName: fatherRef.current.value,
      motherName: motherRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      regNo: parseInt(regNoRef.current.value),
      session: sessionRef.current.value,
      aadharNo: parseInt(adharRef.current.value),
      panNo: panRef.current.value,
      phoneNumber: phoneRef.current.value,
      dob: new Date(dobRef.current.value),
      course: courseRef.current.value,
      category: categoryRef.current.value,
      gender: genderRef.current.value,
    })
    setMessage(data.message)
    if (data.error) {
      setVariant('danger')
    } else (setVariant('success'))

    nameRef.current.value = ''
    fatherRef.current.value = ''
    motherRef.current.value = ''
    addressRef.current.value = ''
    emailRef.current.value = ''
    regNoRef.current.value = ''
    sessionRef.current.value = 'Choose...'
    adharRef.current.value = ''
    panRef.current.value = ''
    phoneRef.current.value = ''
    dobRef.current.value = ''
    courseRef.current.value = 'Choose...'
    categoryRef.current.value = 'Choose...'
    genderRef.current.value = 'Choose...'
  }

  return <section className='container mt-3'><AlertMessage message={message} variant={variant} />
    <Form className='container  mt-2' onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter Name" ref={nameRef} />
        </Form.Group>
        <Form.Group as={Col} controlId="form2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" required placeholder="Enter Email" ref={emailRef} />
        </Form.Group>

        <Form.Group as={Col} controlId="form3">
          <Form.Label>Registration No.</Form.Label>
          <Form.Control type="text" required placeholder="Registration No" ref={regNoRef} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form2">
          <Form.Label>Father Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter Father Name" ref={fatherRef} />
        </Form.Group>
        <Form.Group as={Col} controlId="form2">
          <Form.Label>Mother Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter Mother Name" ref={motherRef} />
        </Form.Group>

        <Form.Group as={Col} controlId="form7">
          <Form.Label>Session</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={sessionRef}>
            <option>Choose...</option>
            <option>2018-21</option>
            <option>2019-22</option>
            <option>2020-23</option>
            <option>2021-24</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form2">
          <Form.Label>Aadhar No.</Form.Label>
          <Form.Control type="text" required placeholder="Enter Aadhar No" ref={adharRef} />
        </Form.Group>
        <Form.Group as={Col} controlId="form2">
          <Form.Label>Pan No.</Form.Label>
          <Form.Control type="text" required placeholder="Enter Pan No" ref={panRef} />
        </Form.Group>

        <Form.Group as={Col} controlId="form5">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="text" required placeholder="Enter Phone No." ref={phoneRef} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form5">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" required placeholder="Enter DOB" ref={dobRef} />
        </Form.Group>
        <Form.Group as={Col} controlId="form7">
          <Form.Label>Course</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={courseRef}>
            <option>Choose...</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>MBA</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="form9">
          <Form.Label>Category</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={categoryRef} >
            <option>Choose...</option>
            <option>GEN</option>
            <option>EWS</option>
            <option>OBC</option>
            <option>SC / ST</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="form9">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." required ref={genderRef} >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="form4">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" required placeholder="Address" ref={addressRef} />
        </Form.Group>
      </Row>
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form></section>;
}
