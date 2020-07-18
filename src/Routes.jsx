import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Components/Register'


const Routes = () =>{
    return(
        <Router>
        <Switch>
            <Route exact path='/' component = {Register}/>
            <Route exact path='/registro' component = {Register}/>  
        </Switch>
        </Router>
    )
}
export default Routes;

