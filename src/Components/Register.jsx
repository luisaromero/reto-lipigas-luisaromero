import React from 'react';
import axios from 'axios';
import './Reto.css'
import { Button, Radio ,Input, Card} from 'antd';
import swal from 'sweetalert';



export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    nombre:[],
    rut:[],
    direccion : [],
    cargo:[],
    }
   
  }
  
    render(){
      console.log(this.state.nombre)
    return (
      <div className="Register">
      <Card>
        <label>
          Name:
          <Input type="text" value={this.state.nombre} onChange={(event)=>this.setState({nombre: event.target.value})} />
        </label>
        <label>
          Rut:
          <Input type="text" value={this.state.rut} onChange={(event)=>this.setState({rut: event.target.value})} />
        </label>
        <label>
          Cargo:
          <Input type="text" value={this.state.cargo} onChange={(event)=>this.setState({cargo: event.target.value})}/>
        </label>
        <label>
         Dirección:
          <Input type="text" value={this.state.direccion} onChange={(event)=>this.setState({direccion: event.target.value})} />
        </label>
      
        <Button onClick={()=>
 axios.post("https://desafio-01.herokuapp.com/items" , {name : this.state.nombre , rut : this.state.rut , cargo :this.state.cargo , direccion:this.state.direccion , state : "waiting"}).then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
    }
    type="primary">Inscribir</Button>
    </Card>
      </div>
    );
  }
}

