import React, { Component } from 'react';
import SignInForm from '../sign-in/sign-in-form'
import Header from '../header/Header'

class HomeSignIn extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
     return (
      <div>
        <Header/>
        <SignInForm/>
      </div>
     );
   }
 }


export default HomeSignIn;
