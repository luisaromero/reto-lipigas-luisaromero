import React from 'react';
import { Button} from 'antd';
import {  Link } from "react-router-dom";
import './Reto.css'

export default function Home() {
    return (
      <div className="Home">
    <Link to="/registrar"> <Button type="primary">Inscribir</Button></Link>
        <Link to="/validar">  <Button type="primary" >
          Validar
        </Button></Link>
      </div>
    );
  }