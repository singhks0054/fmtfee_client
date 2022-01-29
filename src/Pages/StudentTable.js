import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';


export function FeeTable(props) {

  return <tbody>
    <tr>
      <td>{props.number}</td>
      <td>{props.regNo}</td>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.submit}</td>
      <td>{props.amount}</td>
      <td>{props.session}</td>
    </tr>
  </tbody>;
}


export default function StudentTable(props) {

  const openHandler = async () => {
    const { data } = await axios.get(`https://fmtfee.herokuapp.com/student/${props.id}`)
    console.log(data);
  }

  return <tbody>
    <tr>
      <td>{props.number}</td>
      <td>{props.regNo}</td>
      <td>{props.name}</td>
      <td>{props.fatherName}</td>
      <td>{props.course}</td>
      <td>{props.session}</td>
      <td>{props.phone}</td>
      <td><Button variant="success" onClick={openHandler}>Detail</Button></td>
    </tr>
  </tbody>;
}
