import React from 'react';
import './Reto.css'
import { Button,Input} from 'antd';
import axios from 'axios';

export default class Register extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    name:[]
    }
  }
  render(){
    return (
      <div className="Validation">
         <label>
          Buscar Cliente por name:
   <Input type="text" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})}/>
   </label>
   <Button onClick={()=>
 axios.get("https://desafio-01.herokuapp.com/items" + "/" + this.state.name).then(function (response) {
  // handle success
  response.data===null? console.log("noexiste") : console.log("existe")
})
.catch(function (error) {
  // handle error
  console.log("error:" +error);
})
    }
    type="primary">Buscar</Button>
   
   <Button onClick={()=>
 axios.put("https://desafio-01.herokuapp.com/items" + "/" + this.state.name , {"state":"aprobado"}).then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log("error:" +error);
})
    }
    type="primary">Aprobar</Button>

<Button onClick={()=>
 axios.put("https://desafio-01.herokuapp.com/items" + "/" + this.state.name , {"state":"rechazar"}).then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log("error:" +error);
})
    }
    type="primary">Rechazar</Button>
      </div>
    );
  }}
  
