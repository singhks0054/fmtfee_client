import React, { useRef, useContext, useState } from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../store/AuthContext';
import AlertMessage from './AlertMessage';

export default function LoginForm() {
  const authCtx = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('https://fmtfee.herokuapp.com/user/login', {
      userName: emailRef.current.value,
      password: passwordRef.current.value
    })
    if (data.token) {
      authCtx.login(data.token, data.user.userName)
    } else (
      setMessage(data.message)
    )

  }

  return (
    <>
      {message && <AlertMessage variant={'danger'} message={message} />}
      <Form className=' container mt-5 pt-5 w-75' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" ref={emailRef} placeholder="Enter userName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
