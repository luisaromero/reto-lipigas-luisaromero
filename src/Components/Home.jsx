import React from 'react';
import { Button, Radio } from 'antd';
import {  Link } from "react-router-dom";
import axios from 'axios';

export default function Home() {
    return (
      <div className="">
    <Link to="/registrar"> <Button onClick={()=>
 axios.post("http://localhost:4000/items" , {name : "Hola" , age : "25"}).then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
    }
    type="primary">Inscribir</Button></Link>
        <Button type="primary" >
          Validar
        </Button>
      </div>
    );
  }