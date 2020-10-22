import React from 'react';
import logo from './logo.svg';
import {UserLog} from './components/Login'
import{Todo} from './components/Todo'
import './App.css';
import {Link,BrowserRouter,Route} from 'react-router-dom'

const  App:React.FC=()=> {
  return (
    <div >
      <BrowserRouter>
      <Link to="/"></Link>
      <Link to="/todo"></Link>
      <Route path="/" component={UserLog} exact={true}></Route>
      <Route path="/todo" component={Todo}></Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
