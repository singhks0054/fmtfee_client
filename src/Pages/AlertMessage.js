import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertMessage(props) {
  return <Alert variant={props.variant}>
    {props.message}
  </Alert>;
}
