import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from 'components/registration/login';

class Registration extends React.Component{

  render(){
      return "Registration Activo";
      //return <Login/>;

  }

}

document.addEventListener("DOMContentLoaded",()=>{
  ReactDOM.render(<Registration/>,document.getElementById('react-container'))
})
