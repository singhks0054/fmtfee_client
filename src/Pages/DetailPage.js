import { Axios } from 'axios';
import React, { useEffect } from 'react';

export default function DetailPage(props) {

  useEffect(() => {
    fetchData()

    async function fetchData(params) {
      const { data } = Axios.get(`https://fmtfee.herokuapp.com/student/${props.id}`)
      console.log(data);
    }

  }, []);



  return <div>details page</div>;
}
