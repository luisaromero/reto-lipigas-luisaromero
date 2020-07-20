import React from 'react';
import { Button , Card} from 'antd';
import {  Link } from "react-router-dom";
import './Reto.css'

export default function Home() {
    return (
      <div className="Home">
        <Card className="card">
        <div>
          <img src="https://creaccionweb.files.wordpress.com/2018/05/logo-lipigas.png?w=423" alt="lipigas logo"/>
        </div>
        <div className="btns"> 
          <h1>Registrar Cliente:</h1>
           <Link to="/registrar"> <Button type="primary">Registar</Button></Link></div>
      <div className="btns">
        <h1>Validar Cliente:</h1>
        <Link to="/validar">  <Button type="primary" >
          Validar
        </Button></Link>
        </div>
        </Card>
      </div>
    );
  }