import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Components/Register';
import Validation from './Components/Validation'
import Home from './Components/Home'



const Routes = () =>{
    return(
        <Router>
        <Switch>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/registrar' component = {Register}/>  
            <Route exact path='/validar' component = {Validation}/>  
        </Switch>
        </Router>
    )
}
export default Routes;

